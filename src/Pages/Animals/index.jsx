import classNames from "classnames/bind";
import styles from "./Animal.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { formatDay } from "../../Utils/time";
import { Link } from "react-router-dom";
import ListSkeleton from "../../Components/ListSkeleton";
import data from "./data";

const cx = classNames.bind(styles);

function Animal() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    setBreeds(data.docs);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className="container-fluid">
        {breeds.length === 0 && <ListSkeleton />}
        <div className="row">
          <div className="col-12 m-b-30">
            <div className="row">
              {breeds.map((breed, index) => {
                return (
                  <div key={index} className="col-md-6 col-lg-3">
                    <div className="card">
                      <Link to={`/animals`}>
                        <img
                          className={cx(["card-img", "img-fluid"])}
                          src={breed.breedImages[0]}
                          alt=""
                        />
                      </Link>
                      <div className="card-body">
                        <Link to={`/animals`}>
                          <h5 className="card-title">{breed.breed_name}</h5>
                        </Link>
                        <p className="card-text">{breed.appearance}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            {formatDay(breed.createdAt)}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Animal;

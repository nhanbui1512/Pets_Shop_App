import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import SellerList from "../../Components/SellerList";
import { useEffect, useState } from "react";
import { getProducts } from "../../Services/API/Products";
import Loader from "../../Components/Loader";

const cx = classNames.bind(styles);

function Home() {
  const [page] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts({ page: page, perPage: 20 })
      .then((res) => {
        setLoading(false);
        setProducts(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div className={cx("wrapper")}>
      {loading && (
        <div className={cx("loader-container")}>
          <Loader className={cx("loading")} />
        </div>
      )}
      <SellerList items={products} />
    </div>
  );
}
export default Home;

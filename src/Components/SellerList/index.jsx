import classNames from "classnames/bind";
import styles from "./SellerList.module.scss";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";
// import data from "./data";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../Services/API/Category";

const cx = classNames.bind(styles);

function SellerList({ items = [] }) {
  const [categorise, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("col-left")}>
        <div className={cx("title-container")}>
          <h2>Sản phẩm mới nhất</h2>
        </div>
        <div>
          <div
            style={{
              padding: 14,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {categorise.map((item, index) => {
              return (
                <div key={index} className={cx("link")}>
                  <Link>{item.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={cx("product-container")}>
        <div className={cx("product-list")}>
          {items.map((item, index) => (
            <ProductItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerList;

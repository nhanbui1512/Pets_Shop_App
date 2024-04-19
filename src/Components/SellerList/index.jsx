import classNames from "classnames/bind";
import styles from "./SellerList.module.scss";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StorageContext } from "../../Contexts/StorageContext";

const cx = classNames.bind(styles);

function SellerList({ items = [], headerColor = "#064475" }) {
  const storage = useContext(StorageContext);

  return (
    <div
      style={{
        borderColor: headerColor,
      }}
      className={cx("wrapper")}
    >
      <div className={cx("col-left")}>
        <div className={cx("title-container")}>
          <h2
            style={{
              backgroundColor: headerColor,
            }}
          >
            Sản phẩm mới nhất
          </h2>
        </div>
        <div>
          <div
            style={{
              padding: 14,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {storage.categories.map((item, index) => {
              return (
                <div key={index} className={cx("link")}>
                  <Link to={`/collections/${item._id}`}>{item.name}</Link>
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

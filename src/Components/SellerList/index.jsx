import classNames from "classnames/bind";
import styles from "./SellerList.module.scss";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";
import data from "./data";

const cx = classNames.bind(styles);

function SellerList() {
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
            <div className={cx("link")}>
              <Link>Thức ăn khô cho chó</Link>
            </div>
            <div className={cx("link")}>
              <Link>Thức ăn mềm, pate cho chó</Link>
            </div>
            <div className={cx("link")}>
              <Link>Xương, bánh thưởng cho chó</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("product-container")}>
        <div className={cx("product-list")}>
          {data.map((item, index) => (
            <ProductItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerList;

import classNames from "classnames/bind";
import styles from "./ListProduct.module.scss";
import ProductItem from "../../Components/ProductItem";
import SortToolBox from "../../Components/SortToolBox";
import data from "../../Components/SellerList/data";

const cx = classNames.bind(styles);

function ListProduct() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h2>Tất cả sản phẩm</h2>
      </div>
      <div className={cx("tools-bar")}>
        <SortToolBox />
      </div>

      <div className={cx("list-product")}>
        {data.map((item, index) => (
          <ProductItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ListProduct;

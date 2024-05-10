import classNames from "classnames/bind";
import styles from "./ListProduct.module.scss";
import ProductItem from "../../Components/ProductItem";
import SortToolBox from "../../Components/SortToolBox";
import ListSkeleton from "../../Components/ListSkeleton";

const cx = classNames.bind(styles);

function ListProduct({
  title = "Tất cả sản phẩm",
  breeds = [],
  products = [],
}) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h2>{title}</h2>
      </div>
      <div className={cx("tools-bar")}>
        <SortToolBox />
      </div>

      {products.length === 0 && <ListSkeleton />}

      <div className={cx("list-product")}>
        {products.map((item, index) => (
          <ProductItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ListProduct;

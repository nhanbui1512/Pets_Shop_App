import classNames from "classnames/bind";
import styles from "./ListProduct.module.scss";
import ProductItem from "../../Components/ProductItem";
import SortToolBox from "../../Components/SortToolBox";
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
        <ProductItem
          data={{
            image:
              "https://bizweb.dktcdn.net/100/229/172/products/bow-wow-pho-mai-cuon-ga-1709195207055.jpg?v=1709440731433",
          }}
        />
        <ProductItem
          data={{
            image:
              "https://bizweb.dktcdn.net/100/229/172/products/bow-wow-pho-mai-cuon-ga-1709195207055.jpg?v=1709440731433",
          }}
        />
        <ProductItem
          data={{
            image:
              "https://bizweb.dktcdn.net/100/229/172/products/bow-wow-pho-mai-cuon-ga-1709195207055.jpg?v=1709440731433",
          }}
        />

        <ProductItem
          data={{
            image:
              "https://bizweb.dktcdn.net/100/229/172/products/bow-wow-pho-mai-cuon-ga-1709195207055.jpg?v=1709440731433",
          }}
        />
      </div>
    </div>
  );
}

export default ListProduct;

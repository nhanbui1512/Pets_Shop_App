import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

function ProductDetail() {
  return <div className={cx("wrapper")}>Product detail page</div>;
}

export default ProductDetail;

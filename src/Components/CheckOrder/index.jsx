import classNames from "classnames/bind";
import styles from "./CheckOrder.module.scss";

const cx = classNames.bind(styles);

function CheckOrder() {
  return <div className={cx("wrapper")}>Check order box</div>;
}

export default CheckOrder;

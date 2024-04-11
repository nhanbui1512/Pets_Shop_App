import classNames from "classnames/bind";
import styles from "./Orders.module.scss";
import CheckOrder from "../../Components/CheckOrder";

const cx = classNames.bind(styles);

function Orders() {
  return (
    <div className={cx("wrapper")}>
      <CheckOrder />
    </div>
  );
}

export default Orders;

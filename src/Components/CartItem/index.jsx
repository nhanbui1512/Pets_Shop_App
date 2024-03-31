import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function CartItem() {
  return (
    <div className={cx("cart-item")}>
      <div className={cx("cart-item-image")}>
        <img
          src={`https://bizweb.dktcdn.net/100/229/172/products/pate-thi-t-ha-m-cao-ca-p-bonbon.jpg?v=1711288065353`}
          alt={"name"}
        />
      </div>
      <div className={cx("cart-item-details")}>
        <div className={cx("cart-item-name")}>Tên sản phẩm</div>
        <div className={cx("cart-item-quantity")}>Số lượng: 1</div>
        <div className={cx("cart-item-price")}>200.000đ</div>
      </div>

      <button className={cx("close-btn")}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
export default CartItem;

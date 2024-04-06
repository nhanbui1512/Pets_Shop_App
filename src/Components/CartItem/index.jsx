import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function CartItem({ data, setCartItems, index }) {
  const deleteCartItem = (index) => {
    setCartItems((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  };

  return (
    <div className={cx("cart-item")}>
      <div className={cx("cart-item-image")}>
        <img
          src={`https://bizweb.dktcdn.net/100/229/172/products/pate-thi-t-ha-m-cao-ca-p-bonbon.jpg?v=1711288065353`}
          alt={"name"}
        />
      </div>
      <div className={cx("cart-item-details")}>
        <div className={cx("cart-item-name")}>{data.name}</div>
        <div
          className={cx("cart-item-quantity")}
        >{`Số lượng: ${data.quantity}`}</div>
        <div className={cx("cart-item-price")}>
          {`${data.price.toLocaleString("vi-VN", { currency: "VND" })}đ`}
        </div>
      </div>

      <button
        onClick={() => {
          deleteCartItem(index);
        }}
        className={cx("close-btn")}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
export default CartItem;

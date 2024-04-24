import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import ActiveNumber from "../CountNumber";
import styles from "./CartProduct.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CartProduct({ data, setCartItems, index }) {
  const handleDeleteItem = (index) => {
    setCartItems((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  };

  return (
    <tr className={cx("product")}>
      <td>
        <Link className={cx("text-dec")}>
          <img
            className={cx("product_img")}
            src={
              data?.productImage ||
              "https://bizweb.dktcdn.net/thumb/small/100/229/172/products/bow-wow-ca-hoi-150g-1709195437957.jpg?v=1709473755860"
            }
            alt="anh"
          />
        </Link>
      </td>
      <td className={cx("product_name")}>
        <Link className={cx("text-dec")}>
          {data?.name || "Cá hồi que cho chó Bow wow 150g"}
        </Link>
      </td>
      <td className={cx("product_species")}>
        <Link className={cx("text-dec")}>chó cỏ</Link>
      </td>
      <td className={cx("product_price")}>
        {`${data?.price.toLocaleString("vi-VN", { currency: "VND" })}đ` ||
          "65.000đ"}
      </td>
      <td>
        <ActiveNumber value={data?.quantity} />
      </td>
      <td
        className={cx("product_price")}
      >{`${(data?.price * data?.quantity).toLocaleString("vi-VN", { currency: "VND" })}`}</td>
      <td>
        <button
          onClick={() => {
            handleDeleteItem(index);
          }}
          className={cx("product-icon_link")}
          to="/cart"
          title="xóa"
        >
          <FontAwesomeIcon
            className={cx("product-icon_remove")}
            icon={faTrashCan}
          />
        </button>
      </td>
    </tr>
  );
}

export default CartProduct;

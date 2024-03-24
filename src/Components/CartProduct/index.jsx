import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import ActiveNumber from "../CountNumber";
import styles from "./CartProduct.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CartProduct() {
  return (
    <tr className={cx("product")}>
      <td>
        <Link className={cx("text-dec")}>
          <img
            className={cx("product_img")}
            src="https://bizweb.dktcdn.net/thumb/small/100/229/172/products/bow-wow-ca-hoi-150g-1709195437957.jpg?v=1709473755860"
            alt="anh"
          />
        </Link>
      </td>
      <td className={cx("product_name")}>
        <Link className={cx("text-dec")}>Cá hồi que cho chó Bow wow 150g</Link>
      </td>
      <td className={cx("product_species")}>
        <Link className={cx("text-dec")}>chó cỏ</Link>
      </td>
      <td className={cx("product_price")}>65.000₫</td>
      <td>
        <ActiveNumber />
      </td>
      <td className={cx("product_price")}>130.000₫</td>
      <td>
        <Link className={cx("product-icon_link")} to="/cart" title="xóa">
          <FontAwesomeIcon
            className={cx("product-icon_remove")}
            icon={faTrashCan}
          />
        </Link>
      </td>
    </tr>
  );
}

export default CartProduct;

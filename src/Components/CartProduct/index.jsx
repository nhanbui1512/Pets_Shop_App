import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./CartProduct.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CartProduct() {
  var [numberProduct, setNumberProduct] = useState(1);

  const handleReduce = () => {
    if (numberProduct <= 1) {
      setNumberProduct(numberProduct);
    } else {
      setNumberProduct(--numberProduct);
    }
  };

  const handleIncrease = () => {
    setNumberProduct(++numberProduct);
  };

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
        <div className={cx("btn-active_product")}>
          <div
            onClick={() => handleReduce()}
            className={cx("btn-active_reduce")}
          >
            <FontAwesomeIcon className={cx("btn-active_icon")} icon={faMinus} />
          </div>
          <div className={cx("product_number")}>{numberProduct}</div>
          <div
            onClick={() => handleIncrease()}
            className={cx("btn-active_increase")}
          >
            <FontAwesomeIcon className={cx("btn-active_icon")} icon={faPlus} />
          </div>
        </div>
      </td>
      <td className={cx("product_price")}>130.000₫</td>
      <td>
        <a className={cx("product-icon_link")} href="/cart" title="xóa">
          <FontAwesomeIcon
            className={cx("product-icon_remove")}
            icon={faTrashCan}
          />
        </a>
      </td>
    </tr>
  );
}

export default CartProduct;

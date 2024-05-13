import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import CartProduct from "../../Components/CartProduct";
import styles from "./Cart.module.scss";
import { StorageContext } from "../../Contexts/StorageContext";
import { useContext } from "react";

const cx = classNames.bind(styles);

function Cart() {
  const check = true;
  const storage = useContext(StorageContext);

  const total = storage.cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <div className={cx("content-cart")}>
      <h3 className={cx("content-cart_head")}>Giỏ hàng</h3>
      <div className={cx("content-box")}>
        {!check ? (
          <p className={cx("content-box_title")}>
            Không có sản phẩm nào trong giỏ hàng. Quay lại cửa hàng để tiếp tục
            mua sắm.
          </p>
        ) : (
          <div className={cx("content-box_table")}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Tên sản phẩm</th>
                  <th>Loại</th>
                  <th>Giá bán lẻ</th>
                  <th>Số lượng</th>
                  <th>Tổng phí</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {storage.cartItems.map((item, index) => (
                  <CartProduct
                    setCartItems={storage.setCartItems}
                    index={index}
                    data={item}
                    key={index}
                  />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>
                    <Link className={cx("btn-cart_back")}>
                      <FontAwesomeIcon
                        className={cx("btn-icon_back")}
                        icon={faArrowAltCircleRight}
                      />
                      <span className={cx("btn-cast_title")}>
                        Tiếp tục mua hàng
                      </span>
                    </Link>
                  </th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>
                    <Link className={cx("btn-cart_back", "btn-cart_update")}>
                      <span className={cx("btn-cast_title")}>
                        Cập nhật giá thành
                      </span>
                    </Link>
                  </th>
                </tr>
              </tfoot>
            </table>

            <div className={cx("content-box_total")}>
              <div className={cx("content-box_house")}>
                <div className={cx("content-box_header")}>Tổng cộng</div>
              </div>

              <div className={cx("content-box_house")}>
                <div className={cx("content-box_title")}>Tổng tiền</div>
                <div className={cx("content-box_price")}>
                  {total.toLocaleString("vi-VN", { currency: "VND" })}₫
                </div>
              </div>

              <div className={cx("btn_total")}>
                <Link
                  to={"/payment"}
                  className={cx("content-box_house", "text-dec")}
                >
                  <FontAwesomeIcon
                    className={cx("btn-total_icon")}
                    icon={faCheckCircle}
                  />
                  <div className={cx("btn-total_title")}>
                    Tiến hành thanh toán
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

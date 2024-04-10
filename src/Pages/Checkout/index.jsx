import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { StorageContext } from "../../Contexts/StorageContext";
const cx = classNames.bind(styles);

const OrderForm = () => {
  const storage = useContext(StorageContext);

  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    note: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleDeleteItem = (index) => {
    storage.setCartItems((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  };

  var totalPrice = storage.cartItems.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);
  return (
    <div className={cx("order-container")}>
      <div onSubmit={handleSubmit} className={cx("order-form")}>
        <div className={cx("form-group")}>
          <label htmlFor="email">Email (tùy chọn)</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChange}
            value={form.phone}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="address">Địa chỉ</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleChange}
            value={form.address}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="note">Ghi chú (tùy chọn)</label>
          <textarea
            name="note"
            id="note"
            onChange={handleChange}
            value={form.note}
          ></textarea>
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="payment">Thanh toán</label>
          <select
            name="payment"
            id="payment"
            onChange={handleChange}
            value={form.payment}
          >
            <option value="COD">COD - Thanh toán khi giao hàng</option>
            <option value="bank">Chuyển khoản qua ngân hàng</option>
          </select>
        </div>
        <button type="submit" className={cx("button-submit")}>
          Đặt hàng
        </button>
      </div>
      <div className={cx("order-detail")}>
        <h3>Order Details:</h3>
        <ul>
          {storage.cartItems.map((item, index) => (
            <li key={index} className={cx("order-item")}>
              <div className={cx("image-container")}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={cx("info-container")}>
                <p>{item.name}</p>
                <p>Giá: {item.price}</p>
                <p>Số lượng: {item.quantity}</p>
                <p>Mô tả: {item.description}</p>
              </div>
              <div
                onClick={() => {
                  handleDeleteItem(index);
                }}
                className={cx("delete-btn")}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
            </li>
          ))}
        </ul>
        <div className={cx("cal-box")}>
          <div
            style={{
              justifyContent: "space-between",
            }}
            className="row"
          >
            <div>Tạm tính</div>
            <div>
              {totalPrice.toLocaleString("vi-VN", { currency: "VND" })}đ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;

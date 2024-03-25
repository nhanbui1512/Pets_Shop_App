import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
const cx = classNames.bind(styles);

const OrderForm = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    note: '',
    payment: 'COD',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const orderItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1,
      description: '',
      image: 'https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      quantity: 2,
      description: '',
      image: 'https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      quantity: 3,
      description: '',
      image: 'https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp',
    },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(form);
  };

  return (
    <div className = { cx("order-container")}>
    <form onSubmit={handleSubmit} className={cx("order-form")}>
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
        <select name="payment" id="payment" onChange={handleChange} value={form.payment}>
          <option value="COD">COD - Thanh toán khi giao hàng</option>
          <option value="bank">Chuyển khoản qua ngân hàng</option>
        </select>
      </div>
      <button type="submit" className={cx("button-submit")}  >Đặt hàng</button>
    </form>
    <div className={cx("order-detail")}>
  <h3>Order Details:</h3>
  <ul>
    {orderItems.map((item) => (
      <li key={item.id} className={cx("order-item")}>
        <div className={cx("image-container")}>
          <img src={item.image} alt={item.name} />
        </div>
        <div className={cx("info-container")}>
          <p>{item.name}</p>
          <p>Giá: {item.price}</p>
          <p>Số lượng: {item.quantity}</p>
          <p>Mô tả: {item.description}</p>
        </div>
      </li>
    ))}
  </ul>
</div>
    </div>
    
  );
};

export default OrderForm;
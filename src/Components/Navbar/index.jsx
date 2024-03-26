import React, { useState, useRef, useEffect } from "react";
import style from "./navbar.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  function useOutsideAlerter(ref, onClose) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClose]);
  }

  // Hook to close cart when clicking outside
  useOutsideAlerter(cartRef, () => setIsCartOpen(false));

  // Initialize a state variable to keep track of the toggle state
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 1,
      image:
        "https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 2,
      image:
        "https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      quantity: 3,
      image:
        "https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp",
    },
  ];

  // Function to toggle the isOpen state
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={cx("navbar")}>
      <div className={cx("navbar-container")}>
        <nav className={cx("accordion-container")}>
          <div
            className={cx("main-item", { "main-item--open": isOpen })}
            onClick={toggleOpen}
          >
            <FontAwesomeIcon className={cx("icon")} icon={faBars} />
            DANH MỤC
            <FontAwesomeIcon className={cx("expand-icon")} icon={faCaretDown} />
          </div>
          {/* Conditional rendering based on isOpen state */}
          {isOpen && (
            <ul className={cx("ul-items")}>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                <Link to={"/income"}>Income</Link>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                <Link to={"/expenses"}>Expenses</Link>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                <Link to={"/statements"}>Statements</Link>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                {/* <a href="#payouts" title="Payouts">
                  Payouts
                </a> */}
                <Link to={"/payouts"}>Payouts</Link>
              </li>
            </ul>
          )}
        </nav>
        <nav className={cx("nav-items")}>
          {/* items : Trang Chu  */}
          <ul>
            <li>
              <Link className={cx("nav-item")} to={"/"} title="Home">
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <Link
                className={cx("nav-item")}
                to="/collections"
                title="Product"
              >
                SẢN PHẨM
              </Link>
            </li>
            <li>
              <Link className={cx("nav-item")} title="News">
                TIN TỨC
              </Link>
            </li>
            <li>
              <Link className={cx("nav-item")} title="Order">
                ĐƠN HÀNG
              </Link>
            </li>
            <li>
              <Link className={cx("nav-item")} title="Contact">
                LIÊN HỆ
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={cx("nav-icons")}>
          <ul>
            <li>
              <Link
                to={"/cart"}
                onMouseEnter={() => setIsCartOpen(true)}
                ref={cartRef}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li>
              <Link to={"/user"}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* cart component */}
      {isCartOpen && (
        <div className={cx("cart-container")} ref={cartRef}>
          <div>
            {/* <div className={cx("cart-header-item")}>
            <h4>Giỏ hàng</h4>
          </div> */}
            <div className={cx("cart-body-item")}>
              {cartItems.map((item) => (
                <div key={item.id} className={cx("cart-item")}>
                  <div className={cx("cart-item-image")}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={cx("cart-item-details")}>
                    <div className={cx("cart-item-name")}>{item.name}</div>
                    <div className={cx("cart-item-quantity")}>
                      Số lượng: {item.quantity}
                    </div>
                    <div className={cx("cart-item-price")}>
                      {item.price.toLocaleString("vi-VN", { currency: "VND" })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={cx("cart-footer-item")}>
              <div className={cx("cart-total-price")}>
                Tổng cộng:{" "}
                {cartItems
                  .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                  .toLocaleString("vi-VN", { currency: "VND" })}
              </div>
              <button className={cx("cart-checkout-button")}>Thanh toán</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

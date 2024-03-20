import React, { useState } from "react";
import style from "./navbar.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars,faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Navbar() {
  // Initialize a state variable to keep track of the toggle state
  const [isOpen, setIsOpen] = useState(false);

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
                <a href="#income" title="Income">
                  Income
                </a>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                <a href="#expenses" title="Expenses">
                  Expenses
                </a>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                <a href="#statements" title="Statements">
                  Statements
                </a>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                <a href="#payouts" title="Payouts">
                  Payouts
                </a>
              </li>
            </ul>
          )}
        </nav>
        <nav className={cx("nav-items")}>
          {/* items : Trang Chu  */}
          <ul>
            <li>
              <a href="/home" title="Home">
                TRANG CHỦ
              </a>
            </li>
            <li>
              <a href="/product" title="Product">
                SẢN PHẨM
              </a>
            </li>
            <li>
              <a href="/news" title="News">
                TIN TỨC
              </a>
            </li>
            <li>
              <a href="/order" title="Order">
                ĐƠN HÀNG
              </a>
            </li>
            <li>
              <a href="/contact" title="Contact">
                LIÊN HỆ
              </a>
            </li>
          </ul>
        </nav>
        <nav className={cx("nav-icons")}>
          <ul>
            <li>
              <a href="/cart" title="Cart">
                <FontAwesomeIcon icon={faCartShopping}/>
              </a>
            </li>
            <li>
              <a href="/user" title="User">
                <FontAwesomeIcon icon={ faUser } />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

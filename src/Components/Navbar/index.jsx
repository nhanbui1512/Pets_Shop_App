import React, { useState, useRef, useContext, memo } from "react";
import style from "./navbar.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faList,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

import { MenuList, Paper } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CartItem from "../CartItem";

import HeadlessTippy from "@tippyjs/react/headless";
import { StorageContext } from "../../Contexts/StorageContext";

import Cookies from "js-cookie";

const cx = classNames.bind(style);

function Navbar() {
  const cartRef = useRef(null);
  const storage = useContext(StorageContext);

  // Initialize a state variable to keep track of the toggle state
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = storage.cartItems;

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
                <Link>Income</Link>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                <Link>Expenses</Link>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                <Link>Statements</Link>
              </li>
              <li>
                <div className={cx("line-vertical")}></div>
                <div className={cx("line-horizontal")}></div>
                {/* <a href="#payouts" title="Payouts">
                  Payouts
                </a> */}
                <Link>Payouts</Link>
              </li>
            </ul>
          )}
        </nav>
        <nav className={cx("nav-items")}>
          {/* items : Trang Chu  */}
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  cx("nav-item", { active: isActive })
                }
                title="Home"
              >
                TRANG CHỦ
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/collections"}
                className={({ isActive }) =>
                  cx("nav-item", { active: isActive })
                }
                title="Products"
              >
                SẢN PHẨM
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  cx("nav-item", { active: isActive })
                }
                title="News"
              >
                TIN TỨC
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/animals"}
                className={({ isActive }) =>
                  cx("nav-item", { active: isActive })
                }
                title="Animal"
              >
                CHÓ MÈO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  cx("nav-item", { active: isActive })
                }
                title="Order"
              >
                ĐƠN HÀNG
              </NavLink>
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
            <HeadlessTippy
              delay={[0, 200]}
              interactive
              render={() => {
                return (
                  <div className={cx("cart-container")} ref={cartRef}>
                    <div>
                      {/* <div className={cx("cart-header-item")}>
                  <h4>Giỏ hàng</h4>
                </div> */}
                      <div className={cx("cart-body-item")}>
                        {cartItems.map((item, index) => (
                          <CartItem
                            index={index}
                            setCartItems={storage.setCartItems}
                            data={item}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className={cx("cart-footer-item")}>
                        <div className={cx("cart-total-price")}>
                          Tổng cộng:{" "}
                          {cartItems
                            .reduce(
                              (acc, curr) => acc + curr.price * curr.quantity,
                              0
                            )
                            .toLocaleString("vi-VN", { currency: "VND" })}
                          đ
                        </div>
                        <Link
                          to={"/payment"}
                          className={cx("cart-checkout-button")}
                        >
                          Thanh toán
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }}
            >
              <li>
                <Link to={"/cart"} ref={cartRef}>
                  <FontAwesomeIcon fontSize={20} icon={faCartShopping} />
                </Link>
              </li>
            </HeadlessTippy>
            {storage.currentUser && (
              <HeadlessTippy
                placement="bottom"
                interactive
                render={() => (
                  <Paper className={cx("profile-menu")}>
                    <MenuList>
                      <Link to={`/${storage.userData.UserRoles}`}>
                        <MenuItem>
                          {" "}
                          <FontAwesomeIcon
                            className={cx("profile-menu-icon")}
                            icon={faUser}
                          />{" "}
                          Profile
                        </MenuItem>
                      </Link>
                      <MenuItem>
                        <FontAwesomeIcon
                          className={cx("profile-menu-icon")}
                          icon={faList}
                        />{" "}
                        Orders
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          Cookies.remove("token");
                          window.location.reload();
                        }}
                      >
                        <FontAwesomeIcon
                          className={cx("profile-menu-icon")}
                          icon={faRightFromBracket}
                        />
                        Signout
                      </MenuItem>
                    </MenuList>
                  </Paper>
                )}
              >
                <li>
                  <Link>
                    <FontAwesomeIcon fontSize={20} icon={faUser} />
                  </Link>
                </li>
              </HeadlessTippy>
            )}
          </ul>
        </nav>
      </div>
      {/* cart component */}
    </div>
  );
}

export default memo(Navbar);

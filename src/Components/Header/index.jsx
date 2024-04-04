import { Link } from "react-router-dom";
import style from "./header.module.scss";
import classNames from "classnames/bind";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

import { MenuList, Paper } from "@mui/material";

const cx = classNames.bind(style);
function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [searchPopup, setSearchPopup] = useState(false);

  return (
    <header className={cx("header")}>
      <div className={cx("header-content")}>
        <div className={cx("header-content_logo")}>
          <Link to={"/"}>
            <img src="/images/logo.webp" alt="logo" />
          </Link>
        </div>
        <div className={cx(["header-content_search", "search-container"])}>
          <input
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => {
              setSearchPopup(true);
            }}
            onBlur={() => {
              setSearchPopup(false);
            }}
            className={cx("input-search_header")}
            id={cx("search-box")}
            type="text"
            placeholder="Search for products, brands and more"
          />
          <Paper hidden={!searchPopup} className={cx("menu")}>
            <MenuList>
              <MenuItem>Product 1</MenuItem>
              <MenuItem>Product 2</MenuItem>
              <MenuItem>Product 3</MenuItem>
            </MenuList>
          </Paper>

          <button id={cx("search-button")}>Search</button>
        </div>
        <div className={cx("header-content_auth")}>
          <div className={cx("header-content_auth_login")}>
            <Link to={"/login"}>Login</Link>
          </div>
          <span className={cx("divider")}></span>
          <div className={cx("header-content_auth_signup")}>
            <Link to={"/signup"}>Signup</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

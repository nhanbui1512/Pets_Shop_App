import { Link } from "react-router-dom";
import style from "./header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
function Header() {
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
            className={cx("input-search_header")}
            id={cx("search-box")}
            type="text"
            placeholder="Search for products, brands and more"
          />
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

import style from "./header.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("header-content")}>
        <div className={cx("header-content_logo")}>
          <img src="/images/logo.webp" alt="logo" />
        </div>
        <div className={cx("header-content_search search-container")}>
          <input
            className={cx("input-search_header")}
            id="search-box"
            type="text"
            placeholder="Search for products, brands and more"
          />
          <button id="search-button">Search</button>
        </div>
        <div className={cx("header-content_auth")}>
          <div className={cx("header-content_auth_login")}>
            <a href="/login">Login</a>
          </div>
          <span className={cx("divider")}></span>
          <div className={cx("header-content_auth_signup")}>
            <a href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

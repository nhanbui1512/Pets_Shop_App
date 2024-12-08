import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({ title, link, handle, icon, type }) {
  return link ? (
    <Link to={link} className={cx("register-contain_btn")}>
      <FontAwesomeIcon className={cx("register_icon")} icon={icon} />
      {title}
    </Link>
  ) : (
    <button type={type} onClick={handle} className={cx("register-contain_btn")}>
      <FontAwesomeIcon className={cx("register_icon")} icon={icon} />
      {title}
    </button>
  );
}

export default Button;

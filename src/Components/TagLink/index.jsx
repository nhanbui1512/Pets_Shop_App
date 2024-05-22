import { Link } from "react-router-dom";
import styles from "./TagLink.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function TagLink({ children, to = "/", style }) {
  return (
    <Link style={style} to={to} className={cx("link-wrapper")}>
      <div className={cx("wrapper")}>
        <p>{children}</p>
      </div>
    </Link>
  );
}

export default TagLink;

import classNames from "classnames/bind";
import styles from "./DetailBlog.module.scss";

const cx = classNames.bind(styles);

function DetailBlog() {
  return (
    <div className={cx("app")}>
      <div className={cx("content-left")}>d</div>
      <div className={cx("content-right")}>d</div>
    </div>
  );
}

export default DetailBlog;

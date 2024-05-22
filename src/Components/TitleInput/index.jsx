import classNames from "classnames/bind";
import styles from "./TitleInput.module.scss";

const cx = classNames.bind(styles);

function TitleInput({ title, desc, err }) {
  return (
    <div className={cx("register-contain")}>
      <div className={cx("regiter-contain_header")}>{title}</div>
      <p className={cx("regiter-contain_desc")}>{desc}</p>
      <p className={cx("resgiter_error")}>{err}</p>
    </div>
  );
}

export default TitleInput;

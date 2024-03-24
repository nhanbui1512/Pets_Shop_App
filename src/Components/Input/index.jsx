import classNames from "classnames/bind";
import styles from "./Input.module.scss";
const cx = classNames.bind(styles);

function Input({ name, typeOf, handle }) {
  return (
    <div className={cx("register-contain")}>
      <div className={cx("regiter-contain_title")}>
        {name} <b>*</b>
      </div>
      <input
        onChange={handle}
        type={typeOf}
        className={cx("regiter-contain_input")}
        placeholder={name}
        required
      />
    </div>
  );
}

export default Input;

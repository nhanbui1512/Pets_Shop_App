import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({ children, className, primary, rouded, onClick }) {
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    rouded,
    onClick,
  });
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;

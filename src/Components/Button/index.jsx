import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({ children, className, primary, rouded }) {
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    rouded,
  });
  return <button className={classes}>{children}</button>;
}

export default Button;

import classNames from "classnames/bind";
import styles from "./TypingIndicator.module.scss";
const cx = classNames.bind(styles);

export function TypingIndicator() {
  return (
    <div className={cx("ticontainer")}>
      <div className={cx("tiblock")}>
        <div className={cx("tidot")} />
        <div className={cx("tidot")} />
        <div className={cx("tidot")} />
      </div>
    </div>
  );
}

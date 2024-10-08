import classNames from "classnames/bind";
import styles from "./Loader.module.scss";

const cx = classNames.bind(styles);

function Loader({ className }) {
  return <div className={cx("loader")}></div>;
}
export default Loader;

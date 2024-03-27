import classNames from "classnames/bind";
import styles from "./Animal.module.scss";
import ListProduct from "../ListProduct";
const cx = classNames.bind(styles);

function Animal() {
  return (
    <div className={cx("wrapper")}>
      <ListProduct title="Các loài chó mèo" />
    </div>
  );
}
export default Animal;

import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./CollectionLayout.module.scss";

const cx = classNames.bind(styles);

function CollectionLayout() {
  return (
    <div className={cx("wrapper")}>
      <div>Side bar</div>
      <Outlet />
    </div>
  );
}

export default CollectionLayout;

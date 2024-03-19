import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./CollectionLayout.module.scss";
import Sidebar from "../../Components/Sidebar";

const cx = classNames.bind(styles);

function CollectionLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <Sidebar />
      </div>
      <div className={cx("right")}>
        <Outlet />
      </div>
    </div>
  );
}

export default CollectionLayout;

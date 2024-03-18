import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className={cx("content")}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;

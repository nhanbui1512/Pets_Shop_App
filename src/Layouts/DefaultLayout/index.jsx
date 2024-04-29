import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ChatBot from "../../Components/ChatBot";
import { Outlet } from "react-router";
import { useContext } from "react";
import { StorageContext } from "../../Contexts/StorageContext";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const storage = useContext(StorageContext);
  return (
    <div>
      <Header />
      <Navbar />
      <div className={cx("content")}>
        <Outlet />
      </div>
      {storage.userData?.UserRoles !== "admin" && <ChatBot />}
      <Footer />
    </div>
  );
}
export default DefaultLayout;

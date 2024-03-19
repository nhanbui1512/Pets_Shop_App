import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;

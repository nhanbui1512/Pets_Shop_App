import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import SellerList from "../../Components/SellerList";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <SellerList />
    </div>
  );
}
export default Home;

import classNames from "classnames/bind";
import styles from "./CheckOrder.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CheckOrder() {
  return (
    <div className={cx("wrapper")}>
      <h5 className={cx("header")}>
        <FontAwesomeIcon className={cx("search-icon")} icon={faSearch} />
        Kiểm tra đơn hàng của bạn
      </h5>
      <hr />
      <div className={cx("content")}>
        <div className={cx("check-type")}>
          <p>Kiểm tra bằng</p>
          <div className={cx("check-option")}>
            <input name="check" type="radio" />
            <span>Số điện thoại</span>
            <input name="check" type="radio" />
            <span>Email</span>
          </div>
          <div className={cx("option-form")}>
            <p>Số điện thoại</p>
            <input />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 16,
        }}
      >
        <button className={cx("check-btn")}>Kiểm tra</button>
      </div>
    </div>
  );
}

export default CheckOrder;

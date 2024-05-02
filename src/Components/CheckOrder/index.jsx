import classNames from "classnames/bind";
import styles from "./CheckOrder.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function CheckOrder({ onSearchSubmit }) {
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("nameUser");

  const handleSearchSubmit = () => {
    if (onSearchSubmit) {
      onSearchSubmit({ searchValue, type });
    }
  };

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
            <input
              onChange={(e) => {
                setSearchValue("");
                setType(e.target.value);
              }}
              id="name"
              name="check"
              type="radio"
              value="nameUser"
              defaultChecked
            />
            <label htmlFor="name">Tên</label>
            <input
              onChange={(e) => {
                setSearchValue("");
                setType(e.target.value);
              }}
              id="phone"
              name="check"
              type="radio"
              value="phone"
            />
            <label htmlFor="phone">Số điện thoại</label>
          </div>
          <div className={cx("option-form")}>
            <p>{type === "name" ? "Tên" : "Số điện thoại"}</p>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 16,
        }}
      >
        <button
          onClick={(e) => handleSearchSubmit()}
          className={cx("check-btn")}
        >
          Kiểm tra
        </button>
      </div>
    </div>
  );
}

export default CheckOrder;

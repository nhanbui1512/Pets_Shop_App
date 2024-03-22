import classNames from "classnames/bind";
import styles from "./PriceRange.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

const priceFilters = [
  {
    id: 0,
    from: 0,
    to: 50000,
  },

  {
    id: 1,
    from: 50000,
    to: 200000,
  },
  {
    id: 2,
    from: 200000,
    to: 400000,
  },
  {
    id: 3,
    from: 400000,
    to: 1000000,
  },
];

function PriceRange() {
  const [fillters, setFillters] = useState([]);

  return (
    <div className={cx("wrapper")}>
      {fillters.length > 0 && (
        <div style={{ paddingBottom: 8 }}>
          <div className={cx("choosed_header")}>
            <div
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#0038AE",
              }}
            >
              Bạn chọn
            </div>
            <span
              onClick={() => {
                setFillters([]);
              }}
              className={cx("clear-btn")}
            >
              Bỏ hết <FontAwesomeIcon fontSize={10} icon={faChevronRight} />
            </span>
          </div>
          <div>
            {fillters.map((item) => (
              <div key={item.id} className={cx("filter")}>
                <FontAwesomeIcon
                  onClick={() => {
                    setFillters((prev) => {
                      return prev.filter((element) => element.id !== item.id);
                    });
                  }}
                  className={cx("remove-icon")}
                  icon={faXmark}
                />
                <span>{`${item.from}đ - ${item.to}đ`}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={cx("header")}>Khoảng giá</div>
      <div>
        <ul>
          {priceFilters.map((item) => (
            <li key={item.id}>
              <label className={cx("price")}>
                <input
                  checked={
                    fillters.find((element) => element.id === item.id) || false
                  }
                  onChange={(e) => {
                    var isChecked = e.target.checked;
                    if (isChecked) {
                      setFillters((prev) => [...prev, item]);
                    } else {
                      setFillters((prev) => {
                        return prev.filter((element) => element.id !== item.id);
                      });
                    }
                  }}
                  type="checkbox"
                />
                {`${item.from}đ - ${item.to}đ`}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default PriceRange;

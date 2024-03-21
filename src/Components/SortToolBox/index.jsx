import classNames from "classnames/bind";
import styles from "./SortToolBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import HeadlessTipyy from "@tippyjs/react/headless";
import { useState } from "react";

const cx = classNames.bind(styles);

const modes = [
  {
    title: "Ngẫu nhiên",
  },
  {
    title: "Bán Chạy nhất",
  },
  {
    title: "A đến Z",
  },
  {
    title: "Giá giảm dần",
  },
  {
    title: "Giá tăng dần",
  },
  {
    title: "Mới nhất",
  },
  {
    title: "Cũ nhất",
  },
];
function SortToolBox() {
  const [mode, setMode] = useState("Thứ tự");
  return (
    <div className={cx("wrapper")}>
      <label className={cx("label")}>Sắp xếp</label>
      <HeadlessTipyy
        placement="bottom"
        interactive
        offset={[8, 0]}
        render={() => (
          <ul className={cx("sort-modes")}>
            {modes.map((item, index) => (
              <li
                onClick={() => {
                  setMode(modes[index].title);
                }}
                key={index}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      >
        <div className={cx("sort-menu")}>
          {mode}
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </HeadlessTipyy>
    </div>
  );
}
export default SortToolBox;

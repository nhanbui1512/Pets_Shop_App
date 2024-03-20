import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <FontAwesomeIcon
            color="var(--blue-primary)"
            fontSize={18}
            icon={faGem}
          />
          <h3>Danh mục</h3>
        </div>
        <div>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <li>
              <Link className={cx("item")}>Thức ăn cho chó</Link>
            </li>
            <li>
              <Link className={cx("item")}>Thức ăn cho mèo</Link>
            </li>
            <li>
              <Link className={cx("item")}>Sản phẩm dinh dưỡng</Link>
            </li>
            <li>
              <Link className={cx("item")}>Sữa tắm</Link>
            </li>

            <li>
              <Link className={cx("item")}>Đồ chơi chó mèo</Link>
            </li>

            <li>
              <Link className={cx("item")}>Quần áo chó mèo</Link>
            </li>

            <li>
              <Link className={cx("item")}>Dụng cụ vệ sinh</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

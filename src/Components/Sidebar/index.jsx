import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import PriceRange from "../PriceRange";
import { useContext } from "react";
import { StorageContext } from "../../Contexts/StorageContext";

const cx = classNames.bind(styles);

function Sidebar() {
  const storage = useContext(StorageContext);

  return (
    <div className={cx("wrapper")}>
      <div style={{ marginBottom: 30 }} className={cx("container")}>
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
            {storage.categories.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/collections/${item._id}`}
                  className={({ isActive }) =>
                    cx("item", { isActive: isActive })
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cx("container")}>
        <PriceRange />
      </div>
    </div>
  );
}

export default Sidebar;

import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./CollectionLayout.module.scss";
import Sidebar from "../../Components/Sidebar";
import { createContext, useState } from "react";

const cx = classNames.bind(styles);
export const CollectionContext = createContext();

function CollectionLayout() {
  const [filterPrice, setFilterPrice] = useState([]);

  const states = {
    filterPrice,
    setFilterPrice,
  };

  return (
    <CollectionContext.Provider value={states}>
      <div className={cx("wrapper")}>
        <div className={cx("left")}>
          <Sidebar />
        </div>
        <div className={cx("right")}>
          <Outlet />
        </div>
      </div>
    </CollectionContext.Provider>
  );
}

export default CollectionLayout;

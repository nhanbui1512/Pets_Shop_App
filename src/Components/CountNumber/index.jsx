import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./CountNumber.module.scss";

const cx = classNames.bind(styles);

function ActiveNumber() {
  var [numberProduct, setNumberProduct] = useState(1);

  const handleReduce = () => {
    if (numberProduct <= 1) {
      setNumberProduct(numberProduct);
    } else {
      setNumberProduct(--numberProduct);
    }
  };

  const handleIncrease = () => {
    setNumberProduct(++numberProduct);
  };
  return (
    <div className={cx("btn-active_product")}>
      <div onClick={() => handleReduce()} className={cx("btn-active_reduce")}>
        <FontAwesomeIcon className={cx("btn-active_icon")} icon={faMinus} />
      </div>
      <div className={cx("product_number")}>{numberProduct}</div>
      <div
        onClick={() => handleIncrease()}
        className={cx("btn-active_increase")}
      >
        <FontAwesomeIcon className={cx("btn-active_icon")} icon={faPlus} />
      </div>
    </div>
  );
}

export default ActiveNumber;

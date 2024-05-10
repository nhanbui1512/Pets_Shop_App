import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./CountNumber.module.scss";

const cx = classNames.bind(styles);

function CountNumber({ value = 0, className, onChange }) {
  const handleReduce = () => {
    if (value <= 1) {
      return handleChange(value);
    } else {
      return handleChange(--value);
    }
  };

  const handleChange = (value) => {
    if (onChange) onChange(value);
  };

  const handleIncrease = () => {
    return handleChange(++value);
  };
  return (
    <div className={cx("btn-active_product", { [className]: className })}>
      <div onClick={() => handleReduce()} className={cx("btn-active_reduce")}>
        <FontAwesomeIcon className={cx("btn-active_icon")} icon={faMinus} />
      </div>
      <div className={cx("product_number")}>{value}</div>
      <div
        onClick={() => handleIncrease()}
        className={cx("btn-active_increase")}
      >
        <FontAwesomeIcon className={cx("btn-active_icon")} icon={faPlus} />
      </div>
    </div>
  );
}

export default CountNumber;

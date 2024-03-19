import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import Image from "../Image";
import { Link } from "react-router-dom";
import CircleButton from "../CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function ProductItem({ data, className }) {
  return (
    <div className={cx("wrapper", { [className]: className })}>
      <div className="mb-22">
        <div className="col">
          <div className={cx("image-container")}>
            <Image className={cx("product-image")} src={data.image} />
          </div>
          <div className={cx("product-info")}>
            <div className={cx("info-inner")}>
              <div className={cx("name-product")}>
                <Link>{data.name || ""}</Link>
              </div>

              <div className={cx("price")}>
                <span>{data.price}</span>
              </div>

              <div className={cx(["pd_10_0", "actions"])}>
                <CircleButton
                  className={cx("cart-btn")}
                  icon={<FontAwesomeIcon color="#fff" icon={faCartShopping} />}
                />
                <CircleButton
                  className={cx("view-btn")}
                  icon={<FontAwesomeIcon color="#fff" icon={faEye} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;

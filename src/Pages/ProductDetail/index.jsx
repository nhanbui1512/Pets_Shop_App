import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import Image from "../../Components/Image";
import Button from "../../Components/PrimaryButton";

import CountNumber from "../../Components/CountNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);

function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className={cx("wrapper")}>
      <div
        style={{
          width: "100%",
        }}
        className={cx("row")}
      >
        <div className={cx(["left"])}>
          <div className={cx("image-container")}>
            <Image
              src="https://bizweb.dktcdn.net/100/229/172/products/bow-wow-pho-mai-cuon-ga-1709195207055.jpg?v=1709440731433"
              alt=""
            />
          </div>
        </div>
        <div className={cx("right")}>
          <h1 className={cx("product-name")}>
            Phô Mai Cuộn Cho Chó Bow Wow Cheese Roll 120g
          </h1>
          <div className={cx("price")}>
            <span>60.000₫</span>
          </div>
          <p className={cx("description")}>
            Phô mai cuộn cho chó Bow wow cheese roll 120g là thức ăn thơm ngon
            bổ dưỡng cho chó và mèo, nhất là chó con và chó mẹ sau khi sinh.
          </p>
          <div className={cx("slection-box")}>
            <div className={cx("name-selection")}>Hương vị</div>
            <select className={cx("selected")}>
              <option>Gà + bí đỏ</option>
              <option>Gà + cà rốt</option>
              <option>Cá nục</option>
            </select>
          </div>
          <div className={cx("row")}>
            <CountNumber className={cx("count-box")} />
            <Button rouded>MUA HÀNG</Button>
          </div>

          <div className={cx("social-box")}>
            <span>Chia sẻ</span>
            <FontAwesomeIcon className={cx("social-icon")} icon={faFacebook} />
            <FontAwesomeIcon className={cx("social-icon")} icon={faTwitter} />
            <FontAwesomeIcon
              className={cx("social-icon")}
              icon={faGooglePlus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

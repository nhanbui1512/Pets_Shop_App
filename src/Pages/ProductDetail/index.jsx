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
import { useContext, useEffect, useRef, useState } from "react";
import { getProductById } from "../../Services/API/Products";
import { toast } from "react-toastify";

import { StorageContext } from "../../Contexts/StorageContext";

const cx = classNames.bind(styles);

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [option, setOption] = useState({});
  const [quantity, setQuantity] = useState(1);

  const storage = useContext(StorageContext);
  const selectRef = useRef();
  const contentRef = useRef();

  const handleBuy = () => {
    const cartItems = [...storage.cartItems];
    const isExistProduct = cartItems.find(
      (item) =>
        item._id === product._id && item.variantOptions._id === option._id
    );

    const cartItem = { ...product };

    if (!isExistProduct) {
      cartItem.variantOptions = option;
      cartItem.quantity = quantity;
      delete cartItem.htmlDomDescription;
      cartItems.push(cartItem);
      storage.setCartItems(cartItems);
    } else {
      isExistProduct.quantity += quantity;
      storage.setCartItems(cartItems);
    }
    toast.success("Thêm sản phẩm vào giỏ hàng thành công");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductById(id)
      .then((res) => {
        setProduct(res);
        setOption(res.variantOptions[0]);
        contentRef.current.innerHTML = res.htmlDomDescription;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
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
                src={
                  product.productImage?.[0] ||
                  "https://bizweb.dktcdn.net/100/229/172/products/bow-wow-pho-mai-cuon-ga-1709195207055.jpg?v=1709440731433"
                }
                alt=""
              />
            </div>
          </div>
          <div className={cx("right")}>
            <h1 className={cx("product-name")}>{product.name}</h1>
            <div className={cx("price")}>
              <span>{`${Number(option.price).toLocaleString("vi-VN", { currency: "VND" })}đ`}</span>
            </div>
            <p className={cx("description")}>
              Phô mai cuộn cho chó Bow wow cheese roll 120g là thức ăn thơm ngon
              bổ dưỡng cho chó và mèo, nhất là chó con và chó mẹ sau khi sinh.
            </p>
            <div className={cx("slection-box")}>
              <div className={cx("name-selection")}>Lựa chọn</div>
              <select
                ref={selectRef}
                onChange={(e) => {
                  const idOption = e.target.value;
                  const optionSelected = product.variantOptions.find(
                    (option) => option._id === idOption
                  );
                  setOption(optionSelected);
                }}
                className={cx("selected")}
              >
                {product.variantOptions?.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.name || "Mặc định"}
                  </option>
                ))}
              </select>
            </div>
            <div className={cx("row")}>
              <CountNumber
                value={quantity}
                setValue={setQuantity}
                className={cx("count-box")}
              />
              <Button onClick={handleBuy} rouded>
                MUA HÀNG
              </Button>
            </div>

            <div className={cx("social-box")}>
              <span>Chia sẻ</span>
              <FontAwesomeIcon
                className={cx("social-icon")}
                icon={faFacebook}
              />
              <FontAwesomeIcon className={cx("social-icon")} icon={faTwitter} />
              <FontAwesomeIcon
                className={cx("social-icon")}
                icon={faGooglePlus}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={cx("dom-content")} ref={contentRef}></div>
    </div>
  );
}

export default ProductDetail;

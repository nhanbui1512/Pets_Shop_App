import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
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
import ImageSlider from "../../Components/ImageSlider";
import { Skeleton } from "@mui/material";

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
    if (Object.keys(product).length !== 0) {
      const cartItems = [...storage.cartItems];
      const isExistProduct = cartItems.find(
        (item) =>
          item._id === product._id && item.variantOption._id === option._id
      );

      if (isExistProduct) {
        isExistProduct.quantity += quantity;
      } else {
        const newItem = {
          _id: product._id,
          name: product.name,
          productImage: product.productImage[0],
          price: option.price,
          quantity: quantity,
          category: product.categoryID,
          variantOption: {
            _id: option._id,
            name: option.name,
          },
        };

        cartItems.push(newItem);
      }
      storage.setCartItems(cartItems);
      toast.success("Thêm sản phẩm vào giỏ hàng thành công");
    }
  };

  const handleChangeQuantity = (value) => {
    setQuantity(value);
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
            <div classNam e={cx("image-container")}>
              {product.productImage?.length > 0 || (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={370}
                  height={370}
                />
              )}
              <ImageSlider images={product.productImage} />
            </div>
          </div>
          <div className={cx("right")}>
            {product.name ? (
              <h1 className={cx("product-name")}>{product.name}</h1>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            )}

            <div className={cx("price")}>
              {option.price ? (
                <span>{`${Number(option.price).toLocaleString("vi-VN", { currency: "VND" })}đ`}</span>
              ) : (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width={"100%"}
                />
              )}
            </div>
            <p className={cx("description")}>{product.description}</p>
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
                onChange={(value) => {
                  handleChangeQuantity(value);
                }}
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

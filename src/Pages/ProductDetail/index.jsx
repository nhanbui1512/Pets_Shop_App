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
import { toast } from "react-toastify";

import { StorageContext } from "../../Contexts/StorageContext";
import ImageSlider from "../../Components/ImageSlider";
import { Skeleton } from "@mui/material";
import { faEllipsis, faLink } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { getProductById } from "../../Services/API/Products";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import EditProductModal from "../../Components/Modals/EditProductModal";

const cx = classNames.bind(styles);

function ProductDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({});
  const [option, setOption] = useState({});
  const [quantity, setQuantity] = useState(1);

  const storage = useContext(StorageContext);
  const selectRef = useRef();
  const contentRef = useRef();
  const [openEditor, setOpenEditor] = useState(false);

  const handleBuy = () => {
    storage.setCartItems((prev) => {
      const items = [...prev];
      const isExited = items.find((item) => item.option?.id === option.id);
      if (!isExited) {
        const newItem = {
          id: product.id,
          name: product.name,
          productImage: product.product_images?.[0]?.fileUrl,
          price: product.options?.[0].price,
          quantity: 1,
          categoryId: product.categoryId,
          option: {
            id: option.id,
            name: option.optionName,
          },
        };
        items.push(newItem);
      } else {
        isExited.quantity++;
      }

      return items;
    });

    toast.success("Thêm sản phẩm vào giỏ hàng thành công");
  };

  const handleChangeQuantity = (value) => {
    setQuantity(value);
  };

  const handleCoppyLink = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(function () {
        toast.success("Đã sao chép đường dẫn");
      })
      .catch(function (error) {
        toast.error("Chưa thể sao chép đường dẫn");
      });
  };

  const handleCloseEditor = () => {
    setOpenEditor(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
        setOption(res.data?.options[0]);
        contentRef.current.innerHTML = res.data.domDescription;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
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
              {product.product_images?.length > 0 || (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={370}
                  height={370}
                />
              )}
              <ImageSlider images={product.product_images} />
            </div>
          </div>
          <div className={cx("right")}>
            <HeadlessTippy
              interactive
              placement="bottom"
              offset={[-5, 0]}
              delay={[0, 300]}
              render={() => (
                <div className={cx("more-menu")}>
                  <div
                    onClick={() => setOpenEditor(true)}
                    className={cx("more-item")}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <span>Edit</span>
                  </div>
                  <div onClick={handleCoppyLink} className={cx("more-item")}>
                    <FontAwesomeIcon icon={faLink} />
                    <span>Coppy Link</span>
                  </div>
                </div>
              )}
            >
              <div className={cx("more-btn")}>
                <FontAwesomeIcon fontSize={26} icon={faEllipsis} />
              </div>
            </HeadlessTippy>
            {product.name && !loading ? (
              <h1 className={cx("product-name")}>{product.name}</h1>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            )}

            <div className={cx("price")}>
              {option.price && !loading ? (
                <span>{`${Number(option?.price).toLocaleString("vi-VN", { currency: "VND" })}đ`}</span>
              ) : (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width={"100%"}
                />
              )}
            </div>
            {product.shortDescription && !loading ? (
              <p className={cx("description")}>{product.shortDescription}</p>
            ) : (
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={"100%"}
              />
            )}

            <div className={cx("slection-box")}>
              <div className={cx("name-selection")}>Lựa chọn</div>
              <select
                ref={selectRef}
                onChange={(e) => {
                  const idOption = e.target.value;
                  const optionSelected = product.options.find(
                    (option) => option.id === Number(idOption)
                  );
                  setOption(optionSelected);
                }}
                className={cx("selected")}
              >
                {product.options?.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.optionName || "Mặc định"}
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
      <div className={cx(["dom-content", "std"])} ref={contentRef}></div>
      <EditProductModal
        data={product}
        open={openEditor}
        handleClose={handleCloseEditor}
      />
    </div>
  );
}

export default ProductDetail;

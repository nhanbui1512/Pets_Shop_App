import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import Image from "../Image";
import { Link } from "react-router-dom";
import CircleButton from "../CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, memo } from "react";
import { toast } from "react-toastify";

import { StorageContext } from "../../Contexts/StorageContext";
import { Tooltip } from "@mui/material";

const cx = classNames.bind(styles);

function ProductItem({ data, className }) {
  const storage = useContext(StorageContext);
  const defaultOption = data?.options[0];

  const handleAddItem = () => {
    storage.setCartItems((prev) => {
      const items = [...prev];
      const isExited = items.find(
        (item) => item.option?.id === defaultOption.id
      );
      if (!isExited) {
        const newItem = {
          id: data.id,
          name: data.name,
          productImage: data.product_images?.[0]?.fileUrl,
          price: defaultOption.price,
          quantity: 1,
          categoryId: data.categoryId,
          option: {
            id: defaultOption.id,
            name: defaultOption.optionName,
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

  return (
    <div className={cx("wrapper", { [className]: className })}>
      <div className="mb-22">
        <div className="col">
          <div className={cx("image-container")}>
            <Link to={`/product/${data.id}`}>
              <Image
                className={cx("product-image")}
                src={data?.product_images?.[0]?.fileUrl || ""}
              />
            </Link>
          </div>
          <div className={cx("product-info")}>
            <div className={cx("info-inner")}>
              <div className={cx("name-product")}>
                <Link to={`/product/${data.id}`}>
                  {data?.name || "Tên sản phẩm"}
                </Link>
              </div>

              <div className={cx("price")}>
                <span>
                  {data?.options?.[0]?.price.toLocaleString("vi-VN", {
                    currency: "VND",
                  })}
                  đ
                </span>
              </div>

              <div className={cx(["pd_10_0", "actions"])}>
                <Tooltip title="Thêm vào giỏ hàng">
                  <div>
                    <CircleButton
                      onClick={handleAddItem}
                      className={cx("cart-btn")}
                      icon={
                        <FontAwesomeIcon
                          color="#fff"
                          fontSize={16}
                          icon={faCartShopping}
                        />
                      }
                    />
                  </div>
                </Tooltip>
                <Tooltip title="Xem chi tiết">
                  <Link to={`/product/${data.id}`}>
                    <CircleButton className={cx("view-btn")}>
                      <FontAwesomeIcon
                        color="#fff"
                        fontSize={16}
                        icon={faEye}
                      />
                    </CircleButton>
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductItem);

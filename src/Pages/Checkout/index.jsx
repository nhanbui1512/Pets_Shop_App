import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { StorageContext } from "../../Contexts/StorageContext";
import {
  getDistricts,
  getProvinces,
  getWards,
} from "../../Services/API/Address";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { toast } from "react-toastify";
import { OrderItems } from "../../Services/API/Orders";
const cx = classNames.bind(styles);

const OrderForm = () => {
  const storage = useContext(StorageContext);

  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState("");

  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");

  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
    payment: "COD",
  });

  const handleChangeInfo = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const calculatePayment = () => {
    let total = 0;
    const items = storage.cartItems;
    const filteredItems = items.map((item) => {
      total += item.quantity * item.price;
      return {
        productId: item._id,
        quantity: item.quantity,
        variantOptions: item.variantOption._id,
        price: item.price,
      };
    });
    return {
      total,
      filteredItems,
    };
  };

  const handleSubmit = (e) => {
    let provinceSlected = provinces.find(
      (item) => item.province_id === province
    );

    let districtSelected = districts.find(
      (item) => item.district_id === district
    );

    let wardSelected = wards.find((item) => item.ward_id === ward);

    if (
      !provinceSlected ||
      !districtSelected ||
      !wardSelected ||
      !form.address ||
      !form.name ||
      !form.phone
    ) {
      return toast.error("Vui lòng nhập đủ thông tin");
    }
    const addressStr = `${form.address}, ${wardSelected.ward_name}, ${districtSelected.district_name}, ${provinceSlected.province_name}`;
    const resultPayment = calculatePayment();

    OrderItems({
      items: resultPayment.filteredItems,
      total: resultPayment.total,
      phoneNumber: form.phone,
      email: form.email,
      address: addressStr,
      userName: form.name,
    })
      .then((res) => {
        toast.success("Đặt hàng thành công");

        setForm({
          name: "",
          phone: "",
          address: "",
          note: "",
          payment: "COD",
        });
        setProvince("");
        storage.setCartItems([]);
        const cartJSON = JSON.stringify([]);
        localStorage.setItem("cart", cartJSON);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteItem = (index) => {
    storage.setCartItems((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  };

  useEffect(() => {
    getProvinces()
      .then((res) => {
        setProvinces(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (province !== "") {
      getDistricts(province).then((res) => {
        setDistricts(res.results);
      });
    }
  }, [province]);

  useEffect(() => {
    if (district !== "") {
      getWards(district).then((res) => {
        setWards(res.results);
      });
    }
  }, [district]);

  // Calculate bill of orders
  var totalPrice = storage.cartItems.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  return (
    <div className={cx("order-container")}>
      <div className={cx("order-form")}>
        <div className={cx("form-group")}>
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChangeInfo}
            value={form.name}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChangeInfo}
            value={form.phone}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="address">Địa chỉ</label>

          <div className={cx("address-form")}>
            {/* Tỉnh */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Tỉnh</InputLabel>
              <Select
                value={province}
                onChange={(e) => {
                  setDistrict("");
                  setWard("");
                  setWards([]);
                  setDistricts([]);
                  setProvince(e.target.value);
                }}
              >
                {provinces.map((item, index) => (
                  <MenuItem key={index} value={item.province_id}>
                    {item.province_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Huyện */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Huyện/Thành Phố
              </InputLabel>
              <Select
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);

                  setWard("");
                  setWards([]);
                }}
              >
                {districts.map((item, index) => (
                  <MenuItem key={index} value={item.district_id}>
                    {item.district_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Phường */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Phường/Xã
              </InputLabel>
              <Select value={ward} onChange={(e) => setWard(e.target.value)}>
                {wards.map((item, index) => (
                  <MenuItem key={index} value={item.ward_id}>
                    {item.ward_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <input
            placeholder="số nhà, tên đường ..."
            type="text"
            name="address"
            id="address"
            onChange={handleChangeInfo}
            value={form.address}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="note">Ghi chú (tùy chọn)</label>
          <textarea
            name="note"
            id="note"
            onChange={handleChangeInfo}
            value={form.note}
          ></textarea>
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="payment">Thanh toán</label>
          <select
            name="payment"
            id="payment"
            onChange={handleChangeInfo}
            value={form.payment}
          >
            <option value="COD">COD - Thanh toán khi giao hàng</option>
            <option value="bank">Chuyển khoản qua ngân hàng</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className={cx("button-submit")}
        >
          Đặt hàng
        </button>
      </div>
      <div className={cx("order-detail")}>
        <h3>Order Details:</h3>
        <div>
          {storage.cartItems.map((item, index) => (
            <div key={index} className={cx("order-item")}>
              <div className={cx("image-container")}>
                <img src={item.productImage} alt="" />
              </div>
              <div className={cx("info-container")}>
                <p className={cx("name-product")}>{item.name}</p>
                <p>
                  Giá:{" "}
                  {`${item.price.toLocaleString("vi-VN", { currency: "VND" })} VNĐ`}
                </p>
                <p>Số lượng: {item.quantity}</p>
              </div>
              <div
                onClick={() => {
                  handleDeleteItem(index);
                }}
                className={cx("delete-btn")}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
            </div>
          ))}
        </div>
        <div className={cx("cal-box")}>
          <div
            style={{
              justifyContent: "space-between",
            }}
            className="row"
          >
            <div>Tạm tính</div>
            <div>
              {totalPrice.toLocaleString("vi-VN", { currency: "VND" })}đ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;

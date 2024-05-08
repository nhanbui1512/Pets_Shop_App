import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./OrderDetail.module.scss";
import { useEffect, useState } from "react";
import { confirmOrder, getOrderById } from "../../Services/API/Orders";
import { formatDay } from "../../Utils/time";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

function OrderDetail() {
  const { id } = useParams();
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    getOrderById(id)
      .then((res) => {
        setOrderData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleConfirmOrder = () => {
    confirmOrder(id)
      .then((res) => {
        toast.success("Xác nhận đơn hàng thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xác nhận đơn hàng thất bại");
      });
  };

  return (
    <div>
      <div className={cx("col-md-12")}>
        <div className={cx("row")}>
          <div className={cx(["receipt-main"])}>
            <div className={cx("row")}>
              <div className={cx("receipt-header")}>
                <div className={cx("col-xs-6 col-sm-6 col-md-6")}>
                  <div className={cx("receipt-left")}>
                    <img
                      className={cx("img-responsive")}
                      alt="iamgurdeeposahan"
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      style={{
                        width: 71,
                        borderRadius: 43,
                      }}
                    />
                  </div>
                </div>
                <div className={cx(["col-xs-6", "col-sm-6", "text-right"])}>
                  <div className={cx("receipt-right")}>
                    <h5>Company Name.</h5>
                    <p>
                      +1 3649-6589 <i className="fa fa-phone"></i>
                    </p>

                    <p>
                      company@gmail.com <i className="fa fa-envelope-o"></i>
                    </p>

                    <p>
                      USA <i className="fa fa-location-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className={cx(["receipt-header", "receipt-header-mid"])}>
                <div
                  className={cx(["col-xs-8 col-sm-8", "col-md-8 text-left"])}
                >
                  <div className={cx("receipt-right")}>
                    <h5>{orderData.nameUser}</h5>
                    <p>
                      <b>Mobile : </b>
                      {orderData.phone}
                    </p>
                    <p>
                      <b>Email :</b> customer@gmail.com
                    </p>
                    <p>
                      <b>Address :</b> {orderData.address}
                    </p>
                  </div>
                </div>
                <div className={cx("col-xs-4", "col-sm-4", "col-md-4")}>
                  <div className={cx("receipt-left")}>
                    <h3>INVOICE # {id}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <table className={cx("table", "table-bordered")}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.items?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="col-md-9">{`${item.productId?.name}, ${item.variantOptions?.name || ""}`}</td>
                        <td className="col-md-9">{item.quantity}</td>
                        <td className="col-md-9">
                          {item.price?.toLocaleString("vi", {
                            currency: "VND",
                          })}
                        </td>
                        <td className="col-md-3">
                          {`${(item.price * item.quantity)?.toLocaleString("vi", { currency: "VND" })}`}
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td className="text-right">
                      <p>
                        <strong>Total Amount: </strong>
                      </p>
                      <p>
                        <strong>Discount: </strong>
                      </p>
                      <p>
                        <strong>Tax: </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>
                          {orderData.total?.toLocaleString("vi", {
                            currency: "VND",
                          })}
                        </strong>
                      </p>
                      <p>
                        <strong>0</strong>
                      </p>

                      <p>
                        <strong>0</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">
                      <h2>
                        <strong>Total: </strong>
                      </h2>
                    </td>
                    <td className="text-left text-danger">
                      <h2>
                        <strong>
                          {`${orderData.total?.toLocaleString("vi-VN", {
                            currency: "VND",
                          })} VNĐ`}
                        </strong>
                      </h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="receipt-header receipt-header-mid receipt-footer">
                <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                  <div className="receipt-right">
                    <p>
                      <b>Date :</b>
                      <p>{formatDay(orderData.createdAt)}</p>
                    </p>
                    <h5
                      style={{
                        color: "rgb(140, 140, 140)",
                      }}
                    >
                      Thanks for shopping.!
                    </h5>
                  </div>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4">
                  <div className="receipt-left">
                    <h1>Stamp</h1>
                  </div>
                </div>
              </div>
            </div>
            <Button
              sx={{
                float: "right",
              }}
              variant="outlined"
              onClick={handleConfirmOrder}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;

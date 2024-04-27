import classNames from "classnames/bind";
import styles from "./CartPredict.module.scss";
import { Dialog } from "@mui/material";
import { useState } from "react";
const cx = classNames.bind(styles);

function CardPredict() {
  const [dialog, setDialog] = useState(false);

  return (
    <div
      style={{
        maxWidth: 300,
        padding: 16,
      }}
      className="card"
    >
      <img
        className="img-fluid"
        src="https://huanluyenchohungcuong.vn/wp-content/uploads/2022/05/cho-corgi.jpg"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text and below as a natural
          lead-in to the additional content. This content is a little bit
          longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>

      <div>
        <button
          onClick={() => {
            setDialog(true);
          }}
          style={{
            float: "right",
            backgroundColor: "#7571f9",
          }}
          type="button"
          className="btn btn-primary"
        >
          Feedback
        </button>
        <Dialog open={dialog}>
          <div>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Feedback Prediction
                </h5>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDialog(false);
                  }}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <img
                    alt=""
                    src="https://huanluyenchohungcuong.vn/wp-content/uploads/2022/05/cho-corgi.jpg"
                  />

                  <div className="form-group">
                    <h3
                      style={{
                        fontSize: 24,
                        marginTop: 8,
                        fontWeight: 600,
                      }}
                    >
                      Corgi Dog
                    </h3>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                  <div className={cx("slection-box")}>
                    <div className={cx("name-selection")}>Giống loài</div>
                    <select className={cx("selected")}>
                      <option>Chó husky</option>
                      <option>Chó pug</option>
                      <option>Chó bull</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDialog(false);
                  }}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
export default CardPredict;

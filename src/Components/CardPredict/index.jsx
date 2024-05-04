import classNames from "classnames/bind";
import styles from "./CartPredict.module.scss";
import { Button, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { memo } from "react";
import { getBreeds } from "../../Services/API/Breeds";

const cx = classNames.bind(styles);

function CardPredict() {
  const [dialog, setDialog] = useState(false);

  const [message, setMessages] = useState("");
  const [breeds, setBreeds] = useState([]);

  const handleFeedback = () => {
    toast.success("Feedback thành công !");
    setDialog(false);
  };

  useEffect(() => {
    getBreeds({ page: 1, perPage: 50 })
      .then((res) => {
        setBreeds(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <Button
          onClick={() => {
            setDialog(true);
          }}
          variant="contained"
          sx={{ float: "right" }}
        >
          Feedback
        </Button>
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
                      value={message}
                      onChange={(e) => setMessages(e.target.value)}
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                  <div className={cx("slection-box")}>
                    <div className={cx("name-selection")}>Giống loài</div>
                    <select className={cx("selected")}>
                      {breeds.map((breed, index) => {
                        return (
                          <option value={breed._id} key={index}>
                            {breed.breed_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDialog(false);
                  }}
                  variant="contained"
                >
                  Close
                </Button>
                <Button onClick={handleFeedback} variant="outlined">
                  Send Feedback
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
export default memo(CardPredict);

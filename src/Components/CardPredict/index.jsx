import classNames from "classnames/bind";
import styles from "./CartPredict.module.scss";
import Typewriter from "typewriter-effect";

import { Button, Dialog, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { memo } from "react";

import { getBreeds } from "../../Services/API/Breeds";
import TagLink from "../TagLink";
import { feedBackPredict } from "../../Services/API/Feedback";

const cx = classNames.bind(styles);

function CardPredict({ data = {} }) {
  const [dialog, setDialog] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessages] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [improveBreedId, setImproveBreedId] = useState(data.data_breed?._id);

  const [isPredicted, setIsPredicted] = useState(false);

  const handleFeedback = () => {
    if (message.trim() === "" || rating === 0) {
      return toast.error("Bạn phải điền đẩy đủ thông tin");
    }
    feedBackPredict({
      feedback: message,
      feedbackNumber: rating,
      links: data.url,
      cardBreedsId: improveBreedId,
    })
      .then((res) => {
        toast.success("Feedback thành công !");
        setIsPredicted(true);
      })
      .catch((err) => {
        toast.error("Feedback thất bại");
      });
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
        src={data.data_breed?.breedImages?.[0] || ""}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{data?.label || "Animal Name"}</h5>
        <Typewriter
          options={{
            strings: data.data_breed?.appearance,
            autoStart: true,
            delay: 30,
            cursor: "",
          }}
        />
        {/* <p className="card-text">{data.data_breed?.appearance}</p> */}

        <div className="mt-4">
          <h6>
            Độ chính xác{" "}
            <span className="pull-right">{data?.accuracy || 0}%</span>
          </h6>
          <div
            className="progress mb-3"
            style={{
              height: 7,
            }}
          >
            <div
              className="progress-bar bg-primary"
              style={{
                width: `${data?.accuracy}%` || 0,
              }}
              role="progressbar"
            >
              <span className="sr-only">30% Order</span>
            </div>
          </div>
        </div>
        <p className="card-text">
          <small className="text-muted">
            Các sản phẩm gợi ý cho vật nuôi của bạn
          </small>
        </p>
        {data.data_breed?.diets?.map((product, index) => (
          <TagLink key={index} to={`/product/${product._id}`}>
            {product.name}
          </TagLink>
        ))}
      </div>

      <div>
        <Button
          onClick={() => {
            if (!isPredicted) {
              setDialog(true);
            } else {
              toast("Bạn đã thực hiện đánh giá");
            }
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
                  <img alt="" src={data?.url || ""} />

                  <div className="form-group">
                    <h3
                      style={{
                        fontSize: 24,
                        marginTop: 8,
                        fontWeight: 600,
                      }}
                    >
                      {data.data_breed?.breed_name}
                    </h3>
                  </div>
                  <Typography component="legend">Rating</Typography>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
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
                    <select
                      value={improveBreedId}
                      onChange={(e) => setImproveBreedId(e.target.value)}
                      className={cx("selected")}
                    >
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

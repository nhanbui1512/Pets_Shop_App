import classNames from "classnames/bind";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { getBreeds } from "../../../Services/API/Breeds";
import { Link, useParams } from "react-router-dom";
import styles from "./ListFeedback.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteMultiFeedback,
  getFeedbacksByBreed,
} from "../../../Services/API/Feedback";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);

function ListFeedBack() {
  const [breeds, setBreeds] = useState([]);
  const [choosedImages, setChoosedImages] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [popperDelete, setPopperDelete] = useState(false);

  const { id } = useParams();

  const handleChoose = (img) => {
    const isExist = choosedImages.indexOf(img);
    if (isExist === -1) return setChoosedImages((prev) => [...prev, img]);
    setChoosedImages((prev) => {
      const newState = [...prev];
      newState.splice(isExist, 1);
      return newState;
    });
  };

  const handleDelete = () => {
    deleteMultiFeedback(choosedImages)
      .then((res) => {
        toast.success("Xóa feedbacks thành công");
        setChoosedImages([]);
        setPopperDelete(false);
        setFeedbacks((prev) => {
          const result = prev.filter(
            (feedback) => !choosedImages.includes(feedback._id)
          );
          return result;
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xóa feedbacks không thành công");
      });
  };
  useEffect(() => {
    if (!id) {
      getFeedbacksByBreed()
        .then((res) => {
          setFeedbacks(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getFeedbacksByBreed(id)
        .then((res) => {
          setFeedbacks(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setChoosedImages([]);
  }, [id]);

  useEffect(() => {
    getBreeds({ page: 1, perPage: 40 })
      .then((res) => {
        setBreeds(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var totalFeedback = breeds.reduce(
    (accumulator, currentValue) => accumulator + currentValue.feedbackCount,
    0
  );

  return (
    <>
      <div className="row page-titles mx-0">
        <div className="col p-md-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/admin/feedbacks">List Feedback</Link>
            </li>
          </ol>
        </div>
      </div>
      <Button
        onClick={() => {
          if (choosedImages.length === 0)
            return toast.error("Vui lòng chọn ảnh để xóa");
          setPopperDelete(true);
        }}
        style={{ float: "right" }}
        variant="outlined"
        startIcon={<FontAwesomeIcon icon={faTrash} />}
      >
        Delete
      </Button>

      <Fragment>
        <Dialog
          open={popperDelete}
          onClose={() => {
            setPopperDelete(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want delete feedbacks ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The data will be deleted and cannot be restored.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setPopperDelete(false);
              }}
            >
              Disagree
            </Button>
            <Button onClick={handleDelete} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
      <div style={{ display: "flex", justifyContent: "center", gap: 64 }}>
        <div
          style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}
        >
          <div>
            <Link className={cx("breed_item")} to={`/admin/feedbacks`}>
              {" "}
              <p>{`All : ${totalFeedback}`}</p>
            </Link>
          </div>
          {breeds.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  className={cx("breed_item")}
                  to={`/admin/feedbacks/${item._id}`}
                >
                  {" "}
                  <p>{`${item.breed_name} : ${item.feedbackCount} feedback`}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <ImageList sx={{ width: 800 }} cols={3}>
            {feedbacks.length === 0 && (
              <h5 style={{ fontSize: 16 }}>Hiện không có phản hồi nào</h5>
            )}
            {feedbacks.map((item, index) => (
              <ImageListItem
                style={{ height: 200 }}
                onClick={() => {
                  handleChoose(item._id);
                }}
                className={cx("card_image")}
                key={index}
              >
                <img
                  style={{ maxHeight: 200, objectFit: "cover" }}
                  src={`${item.links}`}
                  alt={item.title}
                  loading="lazy"
                />
                {choosedImages.includes(item._id) && (
                  <span className={cx("check-icon")}>
                    <FontAwesomeIcon fontSize={16} icon={faCheckCircle} />
                  </span>
                )}
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  );
}

export default ListFeedBack;

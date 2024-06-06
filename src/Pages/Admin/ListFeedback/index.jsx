import classNames from "classnames/bind";
import { ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getBreeds } from "../../../Services/API/Breeds";
import { Link, useParams } from "react-router-dom";
import styles from "./ListFeedback.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { getFeedbacksByBreed } from "../../../Services/API/Feedback";
const cx = classNames.bind(styles);

function ListFeedBack() {
  const [breeds, setBreeds] = useState([]);
  const [choosedImages, setChoosedImages] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

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

  useEffect(() => {
    if (!id) {
      getFeedbacksByBreed()
        .then((res) => {
          setFeedbacks(res.data);
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

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 64 }}>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
        {breeds.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/admin/feedbacks/${item._id}`}>
                {" "}
                <p>{`${item.breed_name} : ${item.feedbackCount} feedback`}</p>
              </Link>
            </div>
          );
        })}
      </div>

      <ImageList sx={{ width: 800 }} cols={3}>
        {feedbacks.map((item, index) => (
          <ImageListItem
            style={{ height: 200 }}
            onClick={() => {
              handleChoose(item.links);
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
            {choosedImages.includes(item.links) && (
              <span className={cx("check-icon")}>
                <FontAwesomeIcon fontSize={16} icon={faCheckCircle} />
              </span>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default ListFeedBack;

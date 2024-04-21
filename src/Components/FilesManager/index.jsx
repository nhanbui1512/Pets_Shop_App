import classNames from "classnames/bind";
import styles from "./FilesManager.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { faFileCirclePlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import uploadFile from "../../Services/Cloudinary";

const cx = classNames.bind(styles);

function FilesManager({ imageFiles = [], setImageFiles = () => {} }) {
  const inputFileRef = useRef();

  return (
    <div className={cx("file-wrapper")}>
      <button
        onClick={() => {
          inputFileRef.current.click();
        }}
        className={cx("add-files-btn")}
      >
        <FontAwesomeIcon
          className={cx("file-plus-icon")}
          icon={faFileCirclePlus}
        />
      </button>
      {imageFiles.map((file, index) => {
        return (
          <div key={index} className={cx("image-wrapper")}>
            <div
              style={{
                backgroundImage: `url(${file})`,
              }}
              className={cx("image")}
            ></div>
            <button
              onClick={() => {
                setImageFiles((prev) => {
                  const newState = prev.filter((item) => item !== file);
                  return newState;
                });
              }}
              className={cx("delete-btn")}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        );
      })}

      <input
        style={{ display: "none" }}
        max={5}
        accept=".jpg, .jpeg, .png"
        onChange={(e) => {
          if (
            e.target.files.length > 0 &&
            e.target.files[0].type.includes("image")
          ) {
            const file = e.target.files[0];

            uploadFile(file).then((res) => {
              // file.preview = res.data.secure_url;
              setImageFiles((prev) => [...prev, res.data.secure_url]);
              e.target.value = null;
            });
          }
        }}
        ref={inputFileRef}
        type="file"
        className="disappear"
      />
    </div>
  );
}
export default FilesManager;

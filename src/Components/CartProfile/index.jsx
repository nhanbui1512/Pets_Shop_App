import { useContext, useRef, useState } from "react";
import { StorageContext } from "../../Contexts/StorageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import classNames from "classnames/bind";
import styles from "./CartProfile.module.scss";

const cx = classNames.bind(styles);

function CartProfile() {
  const storage = useContext(StorageContext);
  const inputFileRef = useRef();
  const [avatar, setAvatar] = useState("");

  const handleChangeAvatar = (e) => {
    if (e.target.files.length > 0 && e.target.files[0].type.includes("image")) {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setAvatar(fileURL);
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="media align-items-center mb-4">
          <div style={{ position: "relative" }}>
            <img
              className={cx(["mr-3", "avatar"])}
              src={avatar || storage.userData.profileImage}
              width="80"
              height="80"
              alt=""
            />
            <button
              onClick={() => {
                inputFileRef.current.click();
              }}
              className={cx("edit-btn")}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          <div className="media-body">
            <h3 className="mb-0">Pikamy Cha</h3>
            <p className="text-muted mb-0">Canada</p>
          </div>
        </div>

        <h4>About Me</h4>
        <p className="text-muted">
          Hi, I'm Pikamy, has been the industry standard dummy text ever since
          the 1500s.
        </p>
        <ul className="card-profile__info">
          <li className="mb-1">
            <strong className="text-dark mr-4">Mobile</strong>{" "}
            <span>01793931609</span>
          </li>
          <li>
            <strong className="text-dark mr-4">Email</strong>{" "}
            <span>{storage.userData.email}</span>
          </li>
        </ul>
        <div className="col-12 text-center">
          <button className="btn mb-1 btn-flat btn-secondary">
            Edit Profile
          </button>
        </div>
      </div>

      <input
        style={{ display: "none" }}
        max={1}
        accept=".jpg, .jpeg, .png"
        onChange={handleChangeAvatar}
        ref={inputFileRef}
        type="file"
        className="disappear"
      />
    </div>
  );
}
export default CartProfile;

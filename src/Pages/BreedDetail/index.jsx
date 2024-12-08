import classNames from "classnames/bind";
import styles from "./BreedDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { getBreedById } from "../../Services/API/Breeds";
import { formatDay } from "../../Utils/time";

const cx = classNames.bind(styles);

function BreedDetail() {
  const [data, setData] = useState({});
  const contentRef = useRef();

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getBreedById(id)
      .then((res) => {
        setData(res.data);
        contentRef.current.innerHTML = res.data.content;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className={cx("app")}>
      <div className={cx("content-left")}>
        <div className={cx("content-left_box")}>
          <div className={cx("content-left_title")}>{data?.name}</div>
          <div className={cx("content-left_house")}>
            <Link>{formatDay(data.createdAt)}</Link>
          </div>
        </div>

        <div className={cx("content-left_desc")} ref={contentRef}></div>
      </div>
      <div className={cx("content-right")}>
        <div className={cx("content-right_box")}>
          <div className={cx("content-right_title")}>Tìm kiếm</div>
          <div className={cx("content-right_house")}>
            <input
              type="text"
              placeholder="Search..."
              className={cx("content-right_input")}
            />
            <FontAwesomeIcon
              className={cx("content-right_icon")}
              icon={faSearch}
            />
          </div>
        </div>
        <div className={cx("content-right_box")}>
          <div className={cx("content-right_title")}>Tìm kiếm</div>
          <div className={cx("content-right_house")}>
            <Link className={cx("content-right_nameblog")}>
              Giải mã “Chó đít trái tim”: Giống chó hoàng gia đáng yêu
            </Link>
          </div>
          <div className={cx("content-right_house")}>
            <Link className={cx("content-right_nameblog")}>
              Giải mã “Chó đít trái tim”: Giống chó hoàng gia đáng yêu
            </Link>
          </div>
        </div>
        <div className={cx("content-right_box")}>
          <div className={cx("content-right_title")}>Chuyên mục</div>
          <div className={cx("content-right_house")}>
            <Link className={cx("content-right_nameblog")}>Chó</Link>
          </div>
          <div className={cx("content-right_house")}>
            <Link className={cx("content-right_nameblog")}>Mèo</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreedDetail;

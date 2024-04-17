import classNames from "classnames/bind";
import styles from "./DetailBlog.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { getBlogById } from "../../Services/API/Blogs";
import { formatDay } from "../../Utils/time";

const cx = classNames.bind(styles);

function DetailBlog() {
  const [data, setData] = useState({});
  const contentRef = useRef();

  const { id } = useParams();

  useEffect(() => {
    getBlogById(id)
      .then((res) => {
        // console.log(res);
        setData(res);
        contentRef.current.innerHTML = res.content;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className={cx("app")}>
      <div className={cx("content-left")}>
        <div className={cx("content-left_box")}>
          <div className={cx("content-left_title")}>{data?.title}</div>
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

export default DetailBlog;

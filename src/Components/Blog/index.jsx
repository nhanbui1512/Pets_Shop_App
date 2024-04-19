import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Blog.module.scss";
import { formatDay } from "../../Utils/time";

const cx = classNames.bind(styles);

function Blog({ data }) {
  return (
    <div className={cx("blog-box")}>
      <Link className={cx("text-dec")}>
        <img className={cx("blog_img")} src={data.thumbnail} alt="ảnh" />
      </Link>
      <div className={cx("blog-content")}>
        <Link to={`/blog/${data._id}`} className={cx("text-dec")}>
          <h3 className={cx("blog_header")}>{data?.title}</h3>
        </Link>
        <p className={cx("blog_author")}>{formatDay(data.createdAt)}</p>
        <p className={cx("blog_desc")}>{data?.shortContent}</p>
        <Link to={`/blog/${data._id}`} className={cx("text-dec")}>
          <div className={cx("blog_next")}>
            <span>Đọc tiếp</span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Blog;

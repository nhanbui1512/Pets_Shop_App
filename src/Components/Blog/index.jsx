import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Blog.module.scss";

const cx = classNames.bind(styles);

function Blog() {
  return (
    <div className={cx("blog-box")}>
      <Link className={cx("text-dec")}>
        <img className={cx("blog_img")} src="" alt="ảnh" />
      </Link>
      <div className={cx("blog-content")}>
        <Link className={cx("text-dec")}>
          <h3 className={cx("blog_header")}>
            Lý giải: Chó Corgi có đuôi không & Tại sao lại cắt đuôi?
          </h3>
        </Link>
        <p className={cx("blog_author")}>Lê Vân Anh///Tháng Hai 22, 2024</p>
        <p className={cx("blog_desc")}>
          Chó Corgi, với đôi chân ngắn và thân hình dài, đã trở thành một trong
          những giống chó được yêu thích nhất trên thế giới. Được biết đến nhiều
          nhất qua hai loại: Pembroke Welsh Corgi và Cardigan Welsh Corgi, chúng
          không chỉ nổi bật về ngoại hình mà còn về tính cách thân thiện và trí
          thông minh đáng kinh ngạc. Bài viết này Monspet sẽ khám phá một
        </p>
        <Link className={cx("text-dec")}>
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

import classNames from "classnames/bind";
import styles from "./DetailBlog.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function DetailBlog() {
  return (
    <div className={cx("app")}>
      <div className={cx("content-left")}>
        <div className={cx("content-left_box")}>
          <div className={cx("content-left_title")}>
            Giải mã “Chó đít trái tim”: Giống chó hoàng gia đáng yêu
          </div>
          <div className={cx("content-left_house")}>
            <Link>By Lê Vân Anh / Tháng Ba 11, 2024</Link>
          </div>
          <p className={cx("content-left_desc")}>
            Giống chó Corgi, với biệt danh “chó mông trái tim,” được biết đến
            rộng rãi nhờ vẻ ngoài đáng yêu và đặc biệt là hình dáng mông giống
            hình trái tim. Loài chó này có nguồn gốc từ xứ Wales, Anh, và được
            yêu thích bởi bản tính thân thiện, trí thông minh cao và sự linh
            hoạt trong việc học hỏi. Chó Corgi mông trái tim không chỉ là thú
            cưng trong gia đình mà còn là bạn đồng hành đáng tin cậy, mang lại
            niềm vui và tiếng cười cho mọi người xung quanh. Hãy cùng Monspet
            tìm hiểu sâu thêm về giống chó đít trái tim đáng yêu này nhé.
          </p>
        </div>
        <div className={cx("content-left_box")}>
          <div className={cx("content-left_title")}>
            Nguồn gốc của giống chó đít trái tim
          </div>
          <div className={cx("content-left_house")}>
            <Link>By Lê Vân Anh / Tháng Ba 11, 2024</Link>
          </div>
          <p className={cx("content-left_desc")}>
            Corgi có nguồn gốc từ Wales, Vương Quốc Anh, và là một trong những
            giống chó cổ xưa nhất được biết đến. Tên gọi “Corgi” được cho là có
            nguồn gốc từ tiếng Wales cổ, nghĩa là “chó lùn” hoặc “chó chăn gia
            súc,” phản ánh vai trò truyền thống của chúng trong việc chăn dắt
            đàn gia súc. Có hai loại Corgi hay được biết đến là chó đít trái
            tim: Pembroke và Cardigan, cả hai đều có lịch sử lâu đời và gắn liền
            với lịch sử và văn hóa xứ Wales.
          </p>
          <div className={cx("content-left_boxImg")}>
            <img
              src="https://monspet.com/wp-content/uploads/2024/03/nguon-goc.jpg"
              alt="anh dong vat"
            />
            <p className={cx("content-left_origin")}>
              Nguồn gốc của giống chó đít trái tim
            </p>
          </div>
          <p className={cx("content-left_desc")}>
            Corgi Pembroke và Cardigan dù có vẻ ngoài tương tự nhau, nhưng chúng
            đều mang những đặc điểm riêng biệt và lịch sử phong phú. Cardigan là
            giống chó lâu đời hơn, có nguồn gốc từ 1200 năm trước, trong khi
            Pembroke được biết đến sau này và thường được liên kết với hoàng
            gia. Sự khác biệt lớn nhất giữa hai giống chó corgi mông trái tim
            này nằm ở đuôi và bộ lông. Cả hai đều được coi trọng vì khả năng
            chăn cừu xuất sắc, minh chứng cho trí thông minh và sự nhanh nhẹn
            của chúng.
          </p>
          <p className={cx("content-left_link")}>
            <FontAwesomeIcon
              className={cx("content-left_icon")}
              icon={faChevronRight}
            />
            <FontAwesomeIcon
              className={cx("content-left_icon")}
              icon={faChevronRight}
            />
            <FontAwesomeIcon
              className={cx("content-left_icon")}
              icon={faChevronRight}
            />
            <Link className={cx("content-left_name")}>Xem chi tiết</Link>
          </p>
        </div>
        <div className={cx("content-left_desc")}>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx("content-left_iconCircle")}
              />
              <strong>Hình dáng: </strong>
              Corgi có cơ thể dài và thấp, với chân ngắn và cơ bắp.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx("content-left_iconCircle")}
              />
              <strong>Hình dáng: </strong>
              Corgi có cơ thể dài và thấp, với chân ngắn và cơ bắp.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx("content-left_iconCircle")}
              />
              <strong>Hình dáng: </strong>
              Corgi có cơ thể dài và thấp, với chân ngắn và cơ bắp.
            </li>
          </ul>
        </div>
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

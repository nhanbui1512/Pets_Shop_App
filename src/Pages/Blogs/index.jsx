import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Blogs.module.scss";
import Blog from "../../Components/Blog";

const cx = classNames.bind(styles);

function Blogs() {
  return (
    <div className={cx("app")}>
      <div className={cx("content-blog")}>
        <div className={cx("content-blog_search")}>
          <input
            className={cx("content-blog_input")}
            type="text"
            placeholder="Tìm những gì bạn muốn tại đây..."
          />
          <button className={cx("btn_search")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className={cx("content-blog_category")}>
          <Blog />
          <Blog />
        </div>

        <div className={cx("content-blog_adding")}>
          <a className={cx("btn-add_blog")} href="/blog">
            Load thêm nội dung
          </a>
        </div>

        <div className={cx("content-blog_intro")}>
          <p className={cx("content-blog_desc")}>
            Chào mừng đến với chuyên mục thú cưng của Monspet!
          </p>
          <p className={cx("content-blog_desc")}>
            Trong chuyên mục này, bạn sẽ tìm thấy hàng loạt bài viết chất lượng
            về những mẹo hay và kinh nghiệm chăm sóc thú cưng. Từ cách lựa chọn
            thức ăn phù hợp, chế độ dinh dưỡng đúng, cách tạo môi trường sống
            thoải mái và an toàn cho thú cưng, đến việc đào tạo và xử lý những
            vấn đề sức khỏe phổ biến, chúng tôi sẽ giúp bạn có kiến thức và kỹ
            năng cần thiết để trở thành một chủ nuôi thú cưng tuyệt vời.
          </p>
          <p className={cx("content-blog_desc")}>
            Với tình yêu và sự quan tâm đặc biệt dành cho thú cưng, chúng tôi
            cam kết đảm bảo rằng mỗi bài viết được chia sẻ trên Monspet đã được
            kiểm tra kỹ lưỡng và dựa trên những nguồn thông tin đáng tin cậy.
            Đội ngũ chuyên gia của chúng tôi, gồm các bác sĩ thú y và những
            người đam mê thú cưng, luôn sẵn lòng cung cấp hướng dẫn chi tiết và
            trả lời những câu hỏi bạn có thể gặp phải.
          </p>
          <p className={cx("content-blog_desc")}>
            Với chuyên mục thú cưng của Monspet, bạn sẽ không chỉ tìm thấy sự
            thú vị và bổ ích, mà còn nhận được sự hỗ trợ và cảm giác hợp tác từ
            cộng đồng yêu thú cưng rộng lớn. Hãy tham gia cùng chúng tôi và chia
            sẻ những kinh nghiệm và câu chuyện của bạn với thú cưng, để chúng ta
            cùng nhau xây dựng một môi trường yêu thương và quan tâm đến hạnh
            phúc và sức khỏe của các thành viên nhỏ bé trong gia đình!
          </p>
          <p className={cx("content-blog_desc")}>
            Hãy khám phá chuyên mục thú cưng của Monspet ngay hôm nay và bắt đầu
            hành trình chăm sóc thú cưng của bạn một cách tốt nhất!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

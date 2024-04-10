import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

import TitleInput from "../../Components/TitleInput";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";
import { Login as LoginRequest } from "../../Services/API/authService";
import { StorageContext } from "../../Contexts/StorageContext";

const cx = classNames.bind(styles);

function Login() {
  const storage = useContext(StorageContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState([]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setErr((preps) => ["Vui lòng nhập đầy đủ email và mật khẩu"]);
    } else {
      LoginRequest(email, password)
        .then((res) => {
          Cookies.set("token", res.accessToken, { expires: 7 }); // Lưu token trong 7 ngày
          storage.setCurrentUser(true);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={cx("app")}>
      <div className={cx("register_title")}>Đăng nhập</div>
      <div className={cx("app-box")}>
        <div className={cx("register")}>
          <TitleInput
            title={"Đăng ký"}
            desc={
              "Tạo tài khoản để quản lý đơn hàng, và các thông tin thanh toán, gửi hàng một cách đơn giản hơn."
            }
          />
          <div className={cx("regiter-contain_active")}>
            <Button icon={faUser} title={"Tạo tài khoản"} link={"/signup"} />
          </div>
        </div>
        <div className={cx("login")}>
          <TitleInput
            title={"Đăng nhập"}
            desc={"Nếu bạn có tài khoản, hãy đăng nhập dưới đây."}
            err={err}
          />

          <Input handle={handleEmail} name="Email" typeOf="Email" />
          <Input handle={handlePassword} name="Mật khẩu" typeOf="password" />
          <div className={cx("regiter-contain_title")}>
            <b>* Bắt buộc</b>
          </div>
          <div className={cx("regiter-contain_active")}>
            <Button
              icon={faLock}
              handle={handleLogin}
              className={cx("app-btn_update")}
              title="Đăng nhập"
            />
            <div className={cx("register-contain_differ")}>
              <Link
                to={"/login"}
                className={cx("register-contain_differ-active")}
              >
                Mất mật khẩu?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

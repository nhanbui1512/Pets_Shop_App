import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import TitleInput from "../../Components/TitleInput";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [err, setErr] = useState([]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleRegister = () => {
    if (!email || !password || !firstName || !lastName) {
      setErr(["Vui lòng nhập đầy đủ email và mật khẩu"]);
    } else {
      console.log("login thành công");
    }
  };

  return (
    <div className={cx("register")}>
      <h2 className={cx("register_title")}>Đăng ký</h2>
      <div className={cx("register-box")}>
        <div className={cx("register-cover")}>
          <TitleInput
            title="Đăng ký"
            desc={
              "Nếu bạn chưa có tài khoản hãy điền theo mẫu dưới đây để đăng ký."
            }
            err={err}
          />
          <Input handle={handleFirstName} name="Tên" typeOf="text" />
          <Input handle={handleLastName} name="Họ" typeOf="text" />
          <Input handle={handleEmail} name="Email" typeOf="email" />
          <Input handle={handlePassword} name="Mật khẩu" typeOf="password" />
          <div className={cx("register-contain")}>
            <div className={cx("regiter-contain_title")}>
              <b>* Bắt buộc</b>
            </div>
            <div className={cx("regiter-contain_active")}>
              <Button icon={faLock} handle={handleRegister} title={"Đăng ký"} />

              <div className={cx("register-contain_differ")}>
                hoặc
                <Link
                  to={"/login"}
                  className={cx("register-contain_differ-active")}
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

import TitleInput from "../../Components/TitleInput";
import { useNavigate } from "react-router-dom";
import { Login as LoginRequest } from "../../Services/API/authService";
import { StorageContext } from "../../Contexts/StorageContext";

import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const cx = classNames.bind(styles);

function Login() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const storage = useContext(StorageContext);
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    LoginRequest(email, password)
      .then((res) => {
        Cookies.set("token", res.accessToken, { expires: 7 });
        storage.setCurrentUser(true);
        storage.setUserData(res.user);
        toast.success("Đăng nhập thành công");
        navigate("/");
      })
      .catch((err) => {
        reset();
        setFail(true);
        toast.error("Email or password incorrect");
      });
  };

  const [fail, setFail] = useState(false);

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
        <form
          onSubmit={handleSubmit(handleLogin)}
          className={cx("login")}
          autoComplete="off"
        >
          <TitleInput
            title={"Đăng nhập"}
            desc={"Nếu bạn có tài khoản, hãy đăng nhập dưới đây."}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                onChange={field.onChange}
                value={field.email}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    paddingY: 2.5,
                  },
                }}
                placeholder="Input your email"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                onChange={field.onChange}
                value={field.password}
                type="password"
                sx={{
                  marginTop: 2,
                  width: "100%",
                  "& .MuiInputBase-input": {
                    paddingY: 1,
                  },
                }}
                placeholder="Input your password"
              />
            )}
          />
          <div className={cx("regiter-contain_title")}>
            {fail && <b>* Email hoặc mật khẩu không đúng</b>}
          </div>
          <div className={cx("regiter-contain_active")}>
            <Button type="submit" onClick={handleSubmit} variant="contained">
              Đăng nhập
            </Button>
            <div className={cx("register-contain_differ")}>
              <Link
                to={"/login"}
                className={cx("register-contain_differ-active")}
              >
                Quên mật khẩu?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

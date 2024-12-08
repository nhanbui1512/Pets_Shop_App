import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";

import TitleInput from "../../Components/TitleInput";
import { joiResolver } from "@hookform/resolvers/joi";
import { Register as SignUp } from "../../Services/API/authService";
import { Controller, useForm } from "react-hook-form";
import { Button, CircularProgress, TextField } from "@mui/material";
import validation from "./validation";
import { useState } from "react";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

function Register() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, control, setError, reset } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      password: "",
      confirmPassword: "",
    },
    resolver: joiResolver(validation),
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const onSubmit = (values) => {
    const { email, firstName, lastName, password } = values;
    setLoading(true);
    SignUp({ firstName, lastName, email, password })
      .then((res) => {
        toast.success("Register account successfully");
        reset();
      })
      .catch((err) => {
        console.log(err);
        const status = err.response?.data?.status;
        const messsageLog =
          err.response?.data?.error?.message ||
          "Register account unsuccessfully";
        toast.error(messsageLog);

        if (status === 409) {
          setError("email", {
            type: "manual",
            message: "Email is existed",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={cx("register")}>
      <h2 className={cx("register_title")}>Đăng ký</h2>
      <div className={cx("register-box")}>
        <form
          className={cx("register-cover")}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TitleInput
            title="Đăng ký"
            desc={
              "Nếu bạn chưa có tài khoản hãy điền theo mẫu dưới đây để đăng ký."
            }
          />

          <div className="flex flex-col gap-3">
            <Controller
              name="firstName"
              control={control}
              render={({ fieldState: { error } }) => (
                <TextField
                  {...register("firstName")}
                  sx={{
                    width: "100%",
                    backgroundColor: "#fff",
                    "& .MuiInputBase-input": {
                      paddingY: 2.5,
                      backgroundColor: "#fff",
                    },
                  }}
                  placeholder="First name"
                  error={Boolean(error)} // Hiển thị lỗi nếu có
                  helperText={error ? error.message : ""} // Hiển thị thông báo lỗi
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ fieldState: { error } }) => (
                <TextField
                  {...register("lastName")}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      paddingY: 2.5,
                      backgroundColor: "#fff",
                    },
                  }}
                  placeholder="Last name"
                  error={Boolean(error)} // Hiển thị lỗi nếu có
                  helperText={error ? error.message : ""} // Hiển thị thông báo lỗi
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ fieldState: { error } }) => (
                <TextField
                  {...register("email")}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      paddingY: 2.5,
                      backgroundColor: "#fff",
                    },
                  }}
                  placeholder="Your email"
                  error={Boolean(error)} // Hiển thị lỗi nếu có
                  helperText={error ? error.message : ""} // Hiển thị thông báo lỗi
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ fieldState: { error } }) => (
                <TextField
                  type="password"
                  {...register("password")}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      paddingY: 1,
                      backgroundColor: "#fff",
                    },
                  }}
                  placeholder="Password"
                  error={Boolean(error)} // Hiển thị lỗi nếu có
                  helperText={error ? error.message : ""} // Hiển thị thông báo lỗi
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ fieldState: { error } }) => (
                <TextField
                  type="password"
                  {...register("confirmPassword")}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      paddingY: 1,
                      backgroundColor: "#fff",
                    },
                  }}
                  placeholder="Confirm password"
                  error={Boolean(error)} // Hiển thị lỗi nếu có
                  helperText={error ? error.message : ""} // Hiển thị thông báo lỗi
                />
              )}
            />
          </div>

          <div className={cx("register-contain")}>
            <div className={cx("regiter-contain_active")}>
              <Button
                type="submit"
                startIcon={
                  loading && <CircularProgress size={18} color="inherit" />
                }
                variant="contained"
              >
                Đăng ký
              </Button>
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
        </form>
      </div>
    </div>
  );
}

export default Register;

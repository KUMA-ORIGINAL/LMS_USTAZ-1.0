import EyeCloseImg from "../../assets/images/auth-eyeclose.png";
import { useGetProfileQuery, useLoginUserMutation } from "../../http/auth.api";
import EyeImg from "../../assets/images/auth-eye.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify";
import "./index.css";
import {setUser} from "../../slices/authSlice"

const Authorization = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getProfileQuery = useGetProfileQuery();
  const dispatch = useDispatch();

  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();

  const handleLogin = async () => {
    if (email && password) {
      await loginUser({ email, password });
    } else {
      toast.error("Заполните все поля!");
    }
  };
  useEffect(() => {
    console.log(loginData)
    if(isLoginSuccess){
      toast.success("Вы успешно авторизовались!");
      dispatch(setUser({access: loginData.access}));
      localStorage.setItem("access", loginData.access);
  
      navigate("/student/profile");

    }
  }, [isLoginSuccess]);

  useEffect(() => {
    if(isLoginError){
      toast.error(loginError.data.message);
    }
  }, [isLoginError]);

  return (
    <div className="container">
      <div className="auth__content">
        <div className="auth__content-form">
          <h2 className="auth__form-title">Вход в систему</h2>
          <div className="auth__form-box">
            <label htmlFor="email-input">Email</label>
            <input
              type="email"
              id="email-input"
              className="auth__form-email"
              placeholder="youremail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="auth__form-box">
            <label htmlFor="password-input">Пароль</label>
            <div className="auth__input-password">
              <input
                type={showPassword ? "text" : "password"}
                id="password-input"
                className="auth__form-pass"
                placeholder="Ваш пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? EyeImg : EyeCloseImg}
                alt="eye-click"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <button className="auth__submit-btn" onClick={() => handleLogin()}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;

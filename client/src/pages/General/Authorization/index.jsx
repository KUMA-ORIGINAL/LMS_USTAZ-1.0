 import EyeCloseImg from "../../../assets/images/auth-eyeclose.png";
import EyeImg from "../../../assets/images/auth-eye.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify";
import "./index.css";
import {setUser} from "../../../slices/authSlice"
import AuthService from "../../../services/AuthService";

const Authorization = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const handleLogin = async () => {
    try{
      const response = await AuthService.login(email, password);
      console.log(response.data);
      dispatch(
        setUser({
          accessToken: response.data.tokens.access,
          id: response.data.id,
          name: response.data.first_name,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          position:response.data.position,
          phone_number:response.data.phone_number,
          birth_date:response.data.birth_date,
          profile_photo: response.data.profile_photo,
          role: response.data.role,
          email: response.data.email,
          tokens:response.data.tokens,
        }))
        
        toast.success("Вы успешно авторизовались!");
        if(response.data.role === "mentor"){
          navigate("/mentor/profile")
        }else if(response.data.role === "student"){
          navigate("/student/profile")
        }else{
          navigate("/auth")
        }
    }catch (e){
      toast.error("Проверьте правильность логина или пароля!");
      console.log(e.response);
    }
  };
  
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if(user){
      if(user.role === "mentor"){
        navigate("/mentor/profile")
      }else if(user.role === "student"){
        navigate("/student/profile")
      }else{
        navigate("/auth")
      }
    }
  },[])
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

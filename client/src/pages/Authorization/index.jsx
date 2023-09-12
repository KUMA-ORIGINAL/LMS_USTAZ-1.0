import { useState } from "react";

import "./index.css"

import EyeImg from "../../assets/images/auth-eye.png";
import EyeCloseImg from "../../assets/images/auth-eyeclose.png";
const Authorization = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className='container'>
        <div className="auth__content">
            <div className="auth__content-form">
                <h2 className="auth__form-title">Вход в систему</h2>
                <div className="auth__form-box">
                    <label htmlFor="email-input">Email</label>
                    <input type="email" id="email-input" className='auth__form-email' placeholder='youremail@gmail.com'/>
                </div>
                <div className="auth__form-box">
                    <label htmlFor="password-input">Пароль</label>
                        <div className="auth__input-password">
                        <input type={showPassword ? "text" : "password"} id="password-input" className='auth__form-pass' placeholder='Ваш пароль'/>
                        <img src={showPassword ? EyeImg : EyeCloseImg} alt="eye-click" onClick={togglePasswordVisibility} />
                        </div>
                </div>
                <a href="#" className="auth__form-forgot">Забыли пароль?</a>
                <button>Войти</button>
            </div>
        </div>
    </div>
  )
}

export default Authorization
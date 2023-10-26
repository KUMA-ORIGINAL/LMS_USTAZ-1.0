  import React, { useState, useContext } from 'react'
  import './index.css'
  import EyeImg from '../../assets/images/auth-eye.png'
  import EyeCloseImg from '../../assets/images/auth-eyeclose.png'
  import {observer} from "mobx-react-lite";
  import { Context } from '../../App';
import { useNavigate } from 'react-router-dom';
  const Authorization = () => {
    const redirect = useNavigate()
    const [showPassword, setShowPassword] = useState(false)  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    const handleLogin = async () => {
      try{
        await store.login(email, password);
        redirect("/student/profile")
      }catch(e){
        console.log(e);
      }
    }
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
                  type={showPassword ? 'text' : 'password'}
                  id="password-input"
                  className="auth__form-pass"
                  placeholder="Ваш пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={showPassword ? EyeImg : EyeCloseImg}
                  alt="eye-click"
                  
                />
              </div>
            </div>

            <button className="auth__submit-btn" onClick={() => handleLogin()}>
              Войти
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default observer(Authorization)

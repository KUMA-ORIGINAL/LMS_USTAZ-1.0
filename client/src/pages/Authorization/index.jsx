import React, { useEffect, useState } from 'react'
import './index.css'
import { useLoginUserMutation } from '../../store/api/authApi'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../store/reducers/auth/authReducer'
import EyeImg from '../../assets/images/auth-eye.png'
import EyeCloseImg from '../../assets/images/auth-eyeclose.png'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useDispatch } from 'react-redux'

const Authorization = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginUser, { data:loginData, isSuccess, isError }] = useLoginUserMutation()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async () => {
    if (email && password) {
      await loginUser({ email, password })
    } else {
      toast.error('Пожалуйста, заполните все поля')
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success('Авторизация прошла успешно!')
      dispatch(setUser({
        token: loginData.user.token,
        email: loginData.user.email,
      }))
      navigate('/student/profile')
    }
    // Add loginData, dispatch, and navigate to the dependency array
  }, [isSuccess, loginData, dispatch, navigate])
  

  useEffect(() => {
    if(isError){
      toast.error("Неправильный логин или пароль!");
    }
  }, [isError]);
  

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
              onChange={handleEmailChange}
              value={email}
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
                onChange={handlePasswordChange}
              />
              <img
                src={showPassword ? EyeImg : EyeCloseImg}
                alt="eye-click"
                onClick={togglePasswordVisibility}
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

export default Authorization

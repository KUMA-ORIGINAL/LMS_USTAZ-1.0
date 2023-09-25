import React, { useState } from 'react'
import './index.css'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../store/api/auth'
import { setUser, setTokens, setError } from '../../store/reducers/auth/auth'
import EyeImg from '../../assets/images/auth-eye.png'
import EyeCloseImg from '../../assets/images/auth-eyeclose.png'

const Authorization = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { isLoading }] = useLoginMutation()
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleLogin = async () => {
    try {
      const result = await login({ email, password })
      dispatch(setUser(result.data.user))
      dispatch(setTokens(result.data.tokens))
    } catch (error) {
      dispatch(setError(error.message))
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? EyeImg : EyeCloseImg}
                alt="eye-click"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <button
            className="auth__submit-btn"
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  )
}

export default Authorization

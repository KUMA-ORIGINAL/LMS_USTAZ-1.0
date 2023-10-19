import React, { useEffect, useState } from 'react'
import './index.css'
import { useLoginUserMutation } from '../../store/api/authApi'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../store/reducers/auth/authReducer'
import EyeImg from '../../assets/images/auth-eye.png'
import EyeCloseImg from '../../assets/images/auth-eyeclose.png'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const initialState = {
  email: '',
  password: '',
}

const Authorization = () => {
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState(initialState)
  const { email, password } = formValue
  const [loginUser, { data, isSuccess }] = useLoginUserMutation()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.value]: e.target.value })
  }
  const handleLogin = async () => {
    if (email && password) {
      await loginUser({ email, password })
    } else {
      toast.error('Пожалуйста, заполните все поля')
    }
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success('User Login Successfuly')
      dispatch(setUser({ token: data.data.token, name: data.result.name }))
      navigate('/student')
    }
  }, [isSuccess])

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
              onChange={handleChange}
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
                onChange={handleChange}
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

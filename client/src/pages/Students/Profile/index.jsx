import './index.css'

import ProfileAvatar from '../../../assets/images/profile-avatar.png'

import { Link } from 'react-router-dom'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';


const StudentProfile = () => {
  return (
    <>
        <section className="profile-user">
          <div className="profile__card">
            <img src={ProfileAvatar} alt="" className="profile__card-img" />
            <div className="profile__card-box">
            <h3 className="profile__card-title">Максат Каныбеков</h3>
              <p className="profile__card-email">
                maksatkanybekov2004@gmailcom
              </p>
            </div>
            <button className="profile__card-logout">Выйти</button>
          </div>
        <section className="profile-courses">
          <h2 className="profile__courses-title">Главная</h2>
          <nav className="profile__courses-nav">
          <Link>
          <div>
          <PersonOutlinedIcon/>
          </div>
          Персональные данные
          </Link>
          <Link>
          <div>
          <PersonOutlinedIcon/>
          </div>
          Сертификаты
          </Link>
          <Link>
          <div>
          <PersonOutlinedIcon/>
          </div>
          Сменить пароль
          </Link>
          </nav>
        </section>
        </section>
    </>
  )
}

export default StudentProfile

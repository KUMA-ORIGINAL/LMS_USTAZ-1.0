import {Link} from "react-router-dom";
import Logo from "../../../assets/images/usta-logo.png";
import "../index.css";
import Video from "../../../assets/videos/intro-header.mp4";

const Header = () => {
  return (
    <header>

        <div className="video-container">
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        <div className="header__content">
            <div className="header__content-container">
          <img src={Logo} alt="" className="header__content-logo" />
          <nav className="header__content-nav">
            <ul className="header__nav-list">
              <li className="header__list-item">
                <a href="#" className="header__item-link">
                  Курсы
                </a>
              </li>
              <li className="header__list-item">
                <a href="#" className="header__item-link">
                  Методика
                </a>
              </li>
              <li className="header__list-item">
                <a href="#" className="header__item-link">
                  FAQ
                </a>
              </li>
              <li className="header__list-item">
                <a href="#" className="header__item-link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <Link to="/auth" className="header__content-btn">
            Войти
          </Link>
            </div>
            <div className="header__content-intro">
                <h1 className="intro__title">Развивайтесь в мире информационных технологий с <br /> <span className="intro__title-mark">Usta School</span></h1>
                <div className="intro__content-box">
                    <a href="" className="intro__box-btn">Курсы</a>
                    <a href="" className="intro__box-btn intro__btn-submit">Оставить заявку</a>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

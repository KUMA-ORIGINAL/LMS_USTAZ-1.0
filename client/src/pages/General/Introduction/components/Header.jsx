import Logo from "../../../../assets/images/ustaaaz.png";
import "../index.css";
import Video from "../../../../assets/videos/intro-header23.mp4";
import DownArrowImg from "../../../../assets/images/down-arrow.png";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const hambHandler = () => {
    setPopupOpen(!isPopupOpen);
    setMenuOpen(!isMenuOpen);
    document.body.classList.toggle("noscroll");
  };

  const closeOnClick = () => {
    setPopupOpen(false);
    setMenuOpen(false);
    document.body.classList.remove("noscroll");
  };
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header>
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar__wrap">
          <div className="hamb">
          <div className={`hamb__field ${isMenuOpen ? 'active' : ''}`} id="hamb" onClick={hambHandler}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <a href="#" className="logo" id="logo">
            <img src={Logo} alt="" />
          </a>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`} id="menu">
              <li className="header__list-item">
                <a href="#courses" className="header__item-link" onClick={closeOnClick}>
                  Курсы
                </a>
              </li>
              <li className="header__list-item">
                <a href="#methods" className="header__item-link" onClick={closeOnClick}>
                  Методика
                </a>
              </li>
              <li className="header__list-item">
                <a href="#faq" className="header__item-link" onClick={closeOnClick}>
                  FAQ
                </a>
              </li>
              <li className="header__list-item">
                <a href="#anketa" className="header__item-link" onClick={closeOnClick}>
                Консультация
                </a>
              </li>
            </ul>
          <a href="#" className="header__content-btn" >
            Хочу связаться
          </a>
        </div>
      </div>
    </div>
    <div className={`popup ${isPopupOpen ? 'open' : ''}`} id="popup">
        {isPopupOpen && (
          <ul className="menu">
            <li>
              <a href="#courses" onClick={closeOnClick}>
                Курсы
              </a>
            </li>
            <li>
              <a href="#methods" onClick={closeOnClick}>
                Методика 
              </a>
            </li>
            <li>
              <a href="#faq" onClick={closeOnClick}>
                Вопросы
              </a>
            </li>
            <li>
              <a href="#anketa" onClick={closeOnClick}>
                Консультация
              </a>
            </li>
            <li>
            <Link to="/auth" className="header__content-btn" >
            Войти
          </Link>
            </li>
          </ul>
        )}
      </div>
    
    <div className="headerIntro">
      <h1 className="headerInto-title"> Ustaz<span>School</span></h1>
      <p className="headerItext">Создай лучшую версию себя!</p>
      <div className="headerIntoWrapper">
        <a href="">Узнать подробнее</a>
      </div>
      <img src={DownArrowImg} alt="" className="header__downarrow" />
      
    </div>
    </div>
    </header>
  );
};

export default Header;

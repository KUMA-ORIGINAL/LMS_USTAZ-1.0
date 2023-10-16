import {Link} from "react-router-dom";
import Logo from "../../../assets/images/usta-logo.png";
import "../index.css";
import Video from "../../../assets/videos/intro-header.mp4";
import { useState, useEffect } from "react";
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
    if (window.scrollY > 750) {
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
          <Link href="#" className="logo" id="logo">
            <img src={Logo} alt="" />
          </Link>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`} id="menu">
              <li className="header__list-item">
                <Link href="#" className="header__item-link" onClick={closeOnClick}>
                  О нас
                </Link>
              </li>
              <li className="header__list-item">
                <Link href="#" className="header__item-link" onClick={closeOnClick}>
                  Наши преимущества
                </Link>
              </li>
              <li className="header__list-item">
                <Link href="#" className="header__item-link" onClick={closeOnClick}>
                  Услуги
                </Link>
              </li>
              <li className="header__list-item">
                <Link href="#" className="header__item-link" onClick={closeOnClick}>
                  Отзывы
                </Link>
              </li>
              <li className="header__list-item">
                <Link href="#" className="header__item-link" onClick={closeOnClick}>
                  Контакты
                </Link>
              </li>
              <Link href="" className="header__list-link" onClick={closeOnClick}>
                Связаться с нами
              </Link>
            </ul>
          <Link href="" className="header__content-btn" onClick={closeOnClick}>
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
    <div className={`popup ${isPopupOpen ? 'open' : ''}`} id="popup">
        {isPopupOpen && (
          <ul className="menu">
            <li>
              <Link href="#" onClick={closeOnClick}>
                О нас
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeOnClick}>
                Наши преимущества
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeOnClick}>
                Услуги
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeOnClick}>
                Отзывы
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeOnClick}>
                Контакты
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
    </header>
  );
};

export default Header;

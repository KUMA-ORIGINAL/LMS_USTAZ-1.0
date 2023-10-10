import LogoImg from "../images/usta-school.png";
import InstagramIcon from "../images/instagram.png";
import TelegramIcon from "../images/telegram.png";

const Footer = () => {
  return (
    <footer className='ifooter'>
        <div className="ifooter__content">
            <div className="ifooter__content-info">
                <div className="ifooter__info-logo">
                    <img src={LogoImg} alt="" />
                    <h3>USTA <br /> SCHOOL</h3>
                </div>
                <p className="ifooter__info-text">Образование путь к <br /> возможностям!</p>
                <nav className="ifooter__info-nav">
                    <a href="#" className="ifooter__info-link"><img src={InstagramIcon} alt="" /></a>
                    <a href="#" className="ifooter__info-link"><img src={TelegramIcon} alt="" /></a>
                </nav>
            </div>
            <nav className="ifooter__content-nav">
                <h3 className="ifooter__nav-title">Меню</h3>
                <ul className="ifooter__nav-list">
                    <li className="ifooter__nav-item"><a href="#">Главная</a></li>
                    <li className="ifooter__nav-item"><a href="#">Курсы</a></li>
                    <li className="ifooter__nav-item"><a href="#">Методика</a></li>
                    <li className="ifooter__nav-item"><a href="#">Вопросы-Ответы</a></li>
                </ul>
            </nav>
        </div>
        <div className="ifooter__copyright">
            <p className="ifooter__copyright-title">
             Copyright © 2023 USTA SOFT. All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer
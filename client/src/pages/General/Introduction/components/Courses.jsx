import HTMLImg from "../images/html.png"

import LogoImg from "../images/logo.png";
import RamzanPhoto from "../../../../assets/images/ramzan.jpg"
import KumaPhoto from "../../../../assets/images/kuma.png";
const Courses = () => {
  return (
    <section id="courses" className="intro-courses">
    <h2 className="intro__courses-title">Чему Вы хотите научиться?</h2>
    <p className="intro__courses-subtitle">Выберите курс, который вам нужен. Потом наслаждайтесь учебой.</p>
    <div className="intro__courses-wrapper">
      <div className="intro__courses-card">
          <img src={HTMLImg} alt="" className="intro__cc-img"/>
          <p  className="intro__cc-suptitle">2 месяца</p>
          <h4  className="intro__cc-title">HTML ВЕРСТКА</h4>
          <p  className="intro__cc-text">Погружение в мир языка разметки HTML. Вы узнаете, как создавать основные структуры веб-страниц, размещать текст, изображения и ссылки.</p>
          <div className="intro__courses-mentor">
              <div className="intro__cmimg-wrapper">
              <img src={RamzanPhoto} alt="" className="intro__cm-img" />
              </div>
              <div className="intro__cm-info">
                  <h5 className="intro__cm-name">Ramzan</h5>
                  <p className="intro__cm-position">Mentor</p>
              </div>
          </div>
      </div>
      <div className="intro__courses-card">
          <img src={HTMLImg} alt="" className="intro__cc-img"/>
          <p  className="intro__cc-suptitle">9 месяцев</p>
          <h4  className="intro__cc-title">FRONT-END (REACT.JS)</h4>
          <p  className="intro__cc-text">Курс представляет собой  учебный опыт, нацеленный на формирование навыков и знаний, необходимых в области разработки интерфейсов веб-приложений. </p>
          <div className="intro__courses-mentor">
              <div className="intro__cmimg-wrapper">
              <img src={RamzanPhoto} alt="" className="intro__cm-img" />
              </div>
              <div className="intro__cm-info">
                  <h5 className="intro__cm-name">Ramzan</h5>
                  <p className="intro__cm-position">Mentor</p>
              </div>
          </div>
      </div>
      <div className="intro__courses-card">
          <img src={HTMLImg} alt="" className="intro__cc-img"/>
          <p  className="intro__cc-suptitle">9 месяцев</p>
          <h4  className="intro__cc-title">BACK-END (PYTHON - DJANGO)</h4>
          <p  className="intro__cc-text">Присоединяйтесь к нашему  курсу по back-end разработке, который предоставит вам  знания и навыки для создания мощных и эффективных серверных приложений</p>
          <div className="intro__courses-mentor">
              <div className="intro__cmimg-wrapper">
              <img src={KumaPhoto} alt="" className="intro__cm-img" />
              </div>
              <div className="intro__cm-info">
                  <h5 className="intro__cm-name">Kurmanbek</h5>
                  <p className="intro__cm-position">Mentor</p>
              </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Courses

import HTMLImg from "../images/html.png"

import LogoImg from "../images/logo.png";

const Courses = () => {
  return (
    <section className="intro-courses">
    <h2 className="intro__courses-title">Чему Вы хотите научиться?</h2>
    <p className="intro__courses-subtitle">Выберите курс, который вам нужен. Потом наслаждайтесь учебой.</p>
    <div className="intro__courses-wrapper">
      <div className="intro__courses-card">
          <img src={HTMLImg} alt="" className="intro__cc-img"/>
          <p  className="intro__cc-suptitle">180 часов</p>
          <h4  className="intro__cc-title">HTML ВЕРСТКА</h4>
          <p  className="intro__cc-text">Хорошо организованные и простые для понимания учебные пособия с большим количе ...</p>
          <div className="intro__courses-mentor">
              <div className="intro__cmimg-wrapper">
              <img src={LogoImg} alt="" className="intro__cm-img" />
              </div>
              <div className="intro__cm-info">
                  <h5 className="intro__cm-name">Ramzan</h5>
                  <p className="intro__cm-position">Mentor</p>
              </div>
          </div>
      </div>
      <div className="intro__courses-card">
          <img src={HTMLImg} alt="" className="intro__cc-img"/>
          <p  className="intro__cc-suptitle">180 часов</p>
          <h4  className="intro__cc-title">HTML ВЕРСТКА</h4>
          <p  className="intro__cc-text">Хорошо организованные и простые для понимания учебные пособия с большим количе ...</p>
          <div className="intro__courses-mentor">
              <div className="intro__cmimg-wrapper">
              <img src={LogoImg} alt="" className="intro__cm-img" />
              </div>
              <div className="intro__cm-info">
                  <h5 className="intro__cm-name">Maksat</h5>
                  <p className="intro__cm-position">Mentor</p>
              </div>
          </div>
      </div>
      <div className="intro__courses-card">
          <img src={HTMLImg} alt="" className="intro__cc-img"/>
          <p  className="intro__cc-suptitle">180 часов</p>
          <h4  className="intro__cc-title">HTML ВЕРСТКА</h4>
          <p  className="intro__cc-text">Хорошо организованные и простые для понимания учебные пособия с большим количе ...</p>
          <div className="intro__courses-mentor">
              <div className="intro__cmimg-wrapper">
              <img src={LogoImg} alt="" className="intro__cm-img" />
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

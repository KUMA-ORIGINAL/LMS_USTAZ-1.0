import React from 'react'
import img1 from '../../../../assets/images/metods/img11.png'
import img2 from '../../../../assets/images/metods/img22.png'
import img3 from '../../../../assets/images/metods/img33.png'
import img4 from '../../../../assets/images/metods/img44.png'
import img5 from '../../../../assets/images/metods/img55.png'
import img6 from '../../../../assets/images/metods/img66.png'

const array = [
  {
    title: 'Узнаете, как создавать веб приложения с нуля!',
    text: 'Мы начинаем обучение с самого нуля.Для тех, кто готов взять первый шаг в мир программирования! Нулевой опыт? Без проблем! Нам нужен только твой ноутбук и интернет. Мы обещаем: математика и английский - не барьер. Давай вместе создадим твое будущее в IT',
    img: img1,
  },
  {
    title: 'Командное обучение',
    text: 'Обучаться одному скучно, поэтому мы собираем группу в которой будут учиться сразу команда разработчиков',
    img: img2,
  },
  {
    title: 'Внимание каждому студенту',
    text: 'так как у нас 2 ментора, один будет рассказывать тему, в то время как другой будет подходить и помогать всем желающим и не понимающим',
    img: img3,
  },
  {
    title: 'Два ментора вместо одного',
    text: 'дабы не делать обучение муторным, у нас будут 2 преподавателя которые будут меняться каждое занятие и с разными подходами к обучению. Таким образом процесс будет намного разнообразнее',
    img: img6,
  },
]

const Metods = () => {
  return (
    <section id='methods' className="metods">
      <div className="container">
        <div className="metods">
        <h2 className="metods__title">Наши курсы вам, <br /> подходят если вы:</h2>
        <div className="metods__content">
          {array.map((item, i) => {
            return (
              <div key={i} className="metods__box">
                <div className="metods__box-category">Новичок</div>
                <img src={item.img} alt="" className="metods__img" />
                <h4 className="metods__box-title">{item.title}</h4>
                <p className="metods__box-text">{item.text}</p>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Metods

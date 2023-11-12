import React from 'react'
import img1 from '../../../../assets/images/metods/img11.png'
import img2 from '../../../../assets/images/metods/img22.png'
import img3 from '../../../../assets/images/metods/img33.png'
import img4 from '../../../../assets/images/metods/img44.png'
import img5 from '../../../../assets/images/metods/img55.png'
import img6 from '../../../../assets/images/metods/img66.png'

const array = [
  {
    title: 'Старт с самого нуля',
    text: 'Мы начинаем обучение с самого нуля',
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
    title: 'Доступ 24/7',
    text: 'благодаря нашему сайту вы в любой момент можете зайти и посмотреть тему урока, повторить предыдущую или подготовиться к следующей',
    img: img4,
  },
  {
    title: 'Тренинги, тимбилдинги и хакатоны',
    text: 'помимо обучения, будут мероприяти в сфере IT, в которых вы можете принимать участие',
    img: img5,
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
        <div className="metods__box">
        <h2 className="metods__title">Методика Обучения</h2>
        <p className="metods__subtitle">
          Мы разработали уникальную методику обучения
        </p>
        <div className="metods__content">
          {array.map((item, i) => {
            return (
              <div key={i} className="metods__box">
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

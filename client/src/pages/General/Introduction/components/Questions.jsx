import React, { useState } from 'react'
import Accordeon from './Accordeon'
import '../index.css'

const questions = [
  {
    title: 'Какая продолжительность курса?',
    text: 'Продолжительность курсов программирования варьируется в пределах от 2 до 8 месяцев, обеспечивая необходимые навыки в указанный период времени.',
  },
  {
    title: 'Какой формат обучения: очное, дистанционное?',
    text: '"Обучение проводится в очной форме в Techno Coworking.',
  },
  {
    title: 'Какие ресурсы и материалы предоставляются в рамках курса?',
    text: 'Вы получите доступ к USTAZ LMS, где хранятся все материалы курса.',
  },
  {
    title: 'Могу ли я получить скидку?',
    text: 'Да, вы можете получить скидку в размере от 10% до 20% (каждый месяц) за отличную успеваемость на курсе.Помимо этого вы можете получить скидку за приведенного дргуа',
  },
]

const Questions = () => {
  const [openId, setId] = useState(null)

  const handleClick = (id) => {
    id === openId ? setId(null) : setId(id)
  }

  return (
    <section id='faq' className="questions">
      <div className="container">
        <h3 className="metods__title">Ответы на ваши <br /> вопросы</h3>
        <ul className="questions__content">
          {questions.map((item, id) => {
            return (
              <Accordeon
                handleClick={() => handleClick(id)}
                title={item.title}
                isOpen={id === openId}
                key={id}
              >
                {item.text}
              </Accordeon>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Questions
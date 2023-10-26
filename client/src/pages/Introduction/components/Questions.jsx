import React, { useState } from 'react'
import Accordeon from './Accordeon'
import '../index.css'

const questions = [
  {
    title: 'Какая продолжительность курса?',
    text: 'Продолжительность курсов 6 месяцев',
  },
  {
    title: 'Какой формат обучения: очное, дистанционное?',
    text: 'Формат обучения - очное. Занятия будут проводиться в TechCoworking.',
  },
  {
    title: 'Какие ресурсы и материалы предоставляются в рамках курса?',
    text: 'Вам будет дан доступ в USTAZ LMS, в котором хранятся все материалы курса.',
  },
  {
    title: 'Могу ли я получить скидку?',
    text: 'Да, можете получить скидку за хорошую успеваемоть.(От 10% до 30%)',
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
        <h3 className="questions__title">Часто задаваемые вопросы</h3>
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
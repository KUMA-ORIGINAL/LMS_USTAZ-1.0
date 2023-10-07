import React, { useState } from 'react'
import Accordeon from './Accordeon'
import '../index.css'

const questions = [
  {
    title: 'Сколько стоят курсы?',
    text: 'У нас имеется 3 этапа обучения, которые длятся 2 месяца. После окончания этапа, следующий будет стоить на 1000 сомов дороже. Длительность 1 этапа составляет 2 месяца ',
  },
  {
    title: 'Сколько стоят курсы?',
    text: 'У нас имеется 3 этапа обучения, которые длятся 2 месяца. После окончания этапа, следующий будет стоить на 1000 сомов дороже. Длительность 1 этапа составляет 2 месяца',
  },
  {
    title: 'Сколько стоят курсы?',
    text: 'У нас имеется 3 этапа обучения, которые длятся 2 месяца. После окончания этапа, следующий будет стоить на 1000 сомов дороже. Длительность 1 этапа составляет 2 месяца',
  },
  {
    title: 'Сколько стоят курсы?',
    text: 'У нас имеется 3 этапа обучения, которые длятся 2 месяца. После окончания этапа, следующий будет стоить на 1000 сомов дороже. Длительность 1 этапа составляет 2 месяца',
  },
  {
    title: 'Сколько стоят курсы?',
    text: 'У нас имеется 3 этапа обучения, которые длятся 2 месяца. После окончания этапа, следующий будет стоить на 1000 сомов дороже. Длительность 1 этапа составляет 2 месяца',
  },
]

const Questions = () => {
  const [openId, setId] = useState(null)

  const handleClick = (id) => {
    id === openId ? setId(null) : setId(id)
  }

  return (
    <section className="questions">
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
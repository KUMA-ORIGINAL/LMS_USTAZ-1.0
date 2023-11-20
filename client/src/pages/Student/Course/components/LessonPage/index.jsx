import React from 'react'
import './index.css'
import img1 from './img/1.jpg'

const LessonPage = () => {
  return (
    <section className="lesson-page">
      <div className="lp-content">
        <h2 className="lp-title">Направления в IT</h2>
        <img src={img1} alt="" className='lp-img' />
        <div className="lp-info">
          <ol>
            <li>
              Разработка программного обеспечения:{' '}
              <ul>
                <li>
                  Фронтенд-разработка: Создание пользовательского интерфейса, с
                  которым взаимодействуют пользователи.
                </li>
                <li>
                  Бэкенд-разработка: Работа с серверной частью приложений и
                  базами данных.
                </li>
                <li>
                  Мобильная разработка: Создание приложений для мобильных
                  устройств (iOS, Android).
                </li>
              </ul>
            </li>
            <li>
              Искусственный интеллект и машинное обучение:
              <ul>
                <li>
                  Машинное обучение: Разработка алгоритмов, которые позволяют
                  программам учиться на основе данных.
                </li>
                <li>
                  Обработка естественного языка: Работа с компьютерным
                  пониманием и обработкой человеческого языка.
                </li>
              </ul>
            </li>
            <li>
              Кибербезопасность:{' '}
              <ul>
                <li>
                  Защита информации: Разработка систем защиты от кибератак и
                  внутренних угроз.
                </li>
                <li>
                  Этический хакинг: Тестирование безопасности систем с согласия
                  владельцев для выявления уязвимостей.
                </li>
              </ul>
            </li>
            <li>
              Системное администрирование и DevOps:{' '}
              <ul>
                <li>
                  Управление серверами: Обеспечение бесперебойной работы
                  серверов и инфраструктуры.
                </li>
                <li>
                  DevOps: Интеграция процессов разработки и операций для
                  улучшения эффективности и скорости поставки ПО.
                </li>
              </ul>
            </li>
            <li>
              Анализ данных и бизнес-интеллект:
              <ul>
                <li>
                  Анализ данных: Извлечение полезной информации из больших
                  объемов данных.
                </li>
                <li>
                  Бизнес-интеллект: Предоставление бизнес-решений на основе
                  данных и аналитики.
                </li>
              </ul>
            </li>
            <li>
              Интернет вещей (IoT):
              <ul>
                <li>
                  Разработка IoT-устройств: Создание устройств,
                  взаимодействующих между собой через интернет.
                </li>
                <li>
                  Анализ данных от IoT-устройств: Обработка данных, собранных с
                  устройств в реальном времени.
                </li>
              </ul>
            </li>
            <li>
              Веб-дизайн и веб-разработка:
              <ul>
                <li>
                  Веб-дизайн: Создание визуально привлекательных и удобных
                  веб-сайтов.
                </li>
                <li>
                  Веб-разработка: Создание функциональности веб-приложений и
                  сайтов.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default LessonPage

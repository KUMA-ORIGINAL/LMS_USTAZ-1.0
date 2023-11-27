import React from 'react'

const Application = () => {
  return (
    <section className='iform' id='anketa'>
        <h2 className='metods__title'>Получить консультацию</h2>
        <div className="iform-content">
            <input type="text" className='iform__content-input' placeholder='Ваше имя' required/>
            <input type="text" className='iform__content-input' placeholder='Ваш номер телефона' required />
            <button className='iform__content-btn'>Получить консультацию</button>
        </div>
    </section>
  )
}

export default Application
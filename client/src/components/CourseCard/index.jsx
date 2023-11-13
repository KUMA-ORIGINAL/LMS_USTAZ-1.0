import React from 'react'
import ProgramImg from "../../assets/images/shaking-hands.png";
import TimeImg from "../../assets/images/time.png";
import "./index.css";


const CourseCard = () => {
  return (
    <div className='course__card'>
      <div className="course__card-header">
        <p>Программная <br /> инженерия</p>
        <img src={ProgramImg} alt="" />
      </div>
      <h4 className="course__card-title">Front-End: Разработка интерфейсов</h4>
      <div className="course__card-footer">
        <div className="course__footer-duration">
          <div>
        <img src={TimeImg} alt="" />
        <p>6 месяцев</p>
          </div>
          <div>
        <img src={TimeImg} alt="" />
        <p>Каныбеков Максат</p>
          </div>
        </div>
        <button className="course__footer-btn">Подробнее</button>
      </div>
    </div>
  )
}

export default CourseCard;
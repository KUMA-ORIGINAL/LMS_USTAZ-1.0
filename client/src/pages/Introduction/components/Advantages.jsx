import NetworkIcon from "../images/networking-icon.png";
import MentorIcon from "../images/mentor-icon.png";
import BookIcon from '../images/book-icon.png';

const Advantages = () => {
  return (
    <section class="advantages">
        <div className="advantages__card">
            <img src={NetworkIcon} alt="" className="advantages__card-img" />
            <div className="advantages__card-info">
            <h3 className="advantages__card-title">Нетворкинг</h3>
            <p className="advantages__card-text">Нетворкинг - это важный навык для программистов. Он может помочь вам в вашей карьере и сделать вашу жизнь более насыщенной и интересной.</p>
            </div>
        </div>
        <div className="advantages__card">
            <img src={MentorIcon} alt="" className="advantages__card-img" />
            <div className="advantages__card-info">
            <h3 className="advantages__card-title">Эксперт и веселый наставник</h3>
            <p className="advantages__card-text">Учитесь серьезно и не забывайте также расслабляться. Изучайте материалы или занятия с нашими опытными наставниками и получайте от них удовольствие.</p>
            </div>
        </div>
        <div className="advantages__card">
            <img src={BookIcon} alt="" className="advantages__card-img" />
            <div className="advantages__card-info">
            <h3 className="advantages__card-title">LMS - система</h3>
            <p className="advantages__card-text">LMS системы предоставляют вам доступ к учебным материалам, тестам и другим ресурсам в режиме 24/7, что позволяет вам учиться в своем собственном темпе.</p>
            </div>
        </div>
    </section>
  )
}

export default Advantages
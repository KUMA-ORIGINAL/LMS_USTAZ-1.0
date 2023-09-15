import BookIcon from "../../../assets/images/book-icon.png"
import BookActiveIcon from "../../../assets/images/bookactive-icon.png"
import RatingIcon from "../../../assets/images/rating-icon.png"
import RatingActiveIcon from "../../../assets/images/ratingactive-icon.png"


import { Link } from 'react-router-dom'

const arrayForStudents = [
  {
    title: 'Оценки',
    link: '/course/lecture',
  },
  {
    title: 'Курсы',
    link: '/course/rating',
  },
]

const StudentSideBar = () => {
  return (
    <div className="aside__row">
      {/* {arrayForStudents.map((item) => {
        return (
          <Link to={item.link} className="aside__item">
            <div className="aside__title">
              {item.title}
              </div>
            <span className="aside__arrow"> {'>'} </span>
          </Link>
        )
      })} */}
      <div className="aside__block">
      <Link to="/course/lecture" className="aside__item"> 
      <img src={true ? BookActiveIcon : BookIcon} alt="" className="aside__item-img" />
      Курсы
      </Link>
      </div>
      <div className="aside__block">
      <Link to="/course/lecture" className="aside__item"> 
      <img src={true ? RatingActiveIcon : RatingIcon} alt="" className="aside__item-img" />
      Оценки
      </Link>
      </div>
    </div>
  )
}

export default StudentSideBar

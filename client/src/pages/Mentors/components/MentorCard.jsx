import React from 'react'
import userImg from '../../../assets/images/profile-avatar.png'

const users = [
  {
    name: 'Ramzan',
    mail: 'fasfjkflddk@gmail.com',
    birthDay: 'Oct 30, 2003',
    age: 19,
    position: 'Front-End',
  },
  {
    name: 'Ramzan',
    mail: 'fasfjkflddk@gmail.com',
    birthDay: 'Oct 30, 2003',
    age: 19,
    position: 'Front-End',
  },
]

const MentorCard = () => {
  return (
    <>
      {users.map((user) => {
        return (
          <div className="mentors__item">
            <div className="mentors__top">
              <img src={userImg} alt="" className="mentors__item-img" />
              <div className="mentors__user-info">
                <span className="mentors__name">{user.name}</span>
                <span className="mentors__mail">{user.mail}</span>
              </div>
              <div className="mentors__settings">
                <div className="mentors__dot"></div>
                <div className="mentors__dot"></div>
                <div className="mentors__dot"></div>
              </div>
            </div>
            <div className="mentors__line"></div>
            <div className="mentors__bottom">
              <div className="mentors__bottom-item">
                <div className="mentors__bottom-title mentors__mail">
                  Birthday
                </div>
                <div className="mentors__bottom-data">{user.birthDay}</div>
              </div>
              <div className="mentors__bottom-item">
                <div className="mentors__bottom-title mentors__mail">
                  Full age
                </div>
                <div className="mentors__bottom-data">{user.birthDay}</div>
              </div>
              <div className="mentors__bottom-item">
                <div className="mentors__bottom-title mentors__mail">
                  Position
                </div>
                <div className="mentors__bottom-data">{user.position}</div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MentorCard

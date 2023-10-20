import './index.css'

import ProfileAvatar from '../../../assets/images/profile-avatar.png'



const StudentProfile = () => {
  return (
        <section className="profile-user">
          <div className="profile__card">
            <img src={ProfileAvatar} alt="" className="profile__card-img" />
            <div className="profile__card-box">
            <h3 className="profile__card-title">Максат Каныбеков</h3>
              <p className="profile__card-email">
                maksatkanybekov2004@gmailcom
              </p>
            </div>
            <button className="profile__card-logout">Выйти</button>
          </div>
          <div className="profile-info">
            <div className="profile__info-metricks">
              <div className="profile__metric-card">
                <p className="pm__card-title">Место в рейтинге</p>
                <p className="pm__card-metric">1</p>
              </div>
              <div className="profile__metric-card">
              <p className="pm__card-title">Всего баллов</p>
                <p className="pm__card-metric">150</p>
              </div>
              <div className="profile__metric-card">
              <p className="pm__card-title">Всего курсов</p>
                <p className="pm__card-metric">1</p>
              </div>
            </div>
            < div className="profile__info-exams">
                            <h3 className="profile__exams-title">Результаты экзаменов</h3>
          
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="profile__exams-date">Дата</th>
                                        <th>Название курса</th>
                                        <th>Баллы</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>01.05.2023</td>
                                        <td>Курс 1</td>
                                        <td>85</td>
                                    </tr>
                                    <tr>
                                        <td>05.05.2023</td>
                                        <td>Курс 2</td>
                                        <td>92</td>
                                    </tr>
                                    <tr>
                                        <td>10.05.2023</td>
                                        <td>Курс 3</td>
                                        <td>78</td>
                                    </tr>
                                    </tbody>
                                </table>
                      
                        </div>
          </div>
        </section>
  )
}

export default StudentProfile

import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../../slices/authSlice";
import "./index.css";

const StudentProfile = () => {
  const storedUserData = JSON.parse(localStorage.getItem("user"));
console.log(storedUserData);
  const auth = useSelector(selectAuth);
  return (
    <section className="profile-user">
      <div className="profile__card">
        <img
          src={auth.photo || "https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg"}
          alt=""
          className="profile__card-img"
        />
        <div className="profile__card-box">
          <h3 className="profile__card-title">{auth.username || "Username"}</h3>
          <p className="profile__card-email">{auth.email || "Email"}</p>
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
            <p className="pm__card-title">Всего наград</p>
            <p className="pm__card-metric">1</p>
          </div>
        </div>
        <div className="profile__info-exams">
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
  );
};

export default StudentProfile;

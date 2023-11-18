import ProfileCard from "../../../components/ProfileCard";
import ProfileInfo from "../../../components/ProfileInfo";
import "./index.css";


const StudentProfile = () => {
  return (
    <section className="profile">
      <div className="profile-user">
        <ProfileCard />
        <ProfileInfo />
      </div>
      <div>
        <div className="profileinfo">
          <h2>Личные достижения</h2>
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
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;

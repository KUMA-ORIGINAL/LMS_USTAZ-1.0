import { Route, Routes } from 'react-router-dom'

// General pages
import Introduction from './General/Introduction'
import Authorization from './General/Authorization'

//mentor pages
import MentorPageLayout from './Mentor/components/MentorPageLayout'
import MentorHome from './Mentor/Home'
import MentorProfile from './Mentor/Profile'
import MentorVisits from './Mentor/Visits'
import MentorLecture from './Mentor/Lecture'
import MentorSchedule from './Mentor/Schedule'
import MentorStudentsList from './Mentor/StudentsList'
import MentorStudentsRating from './Mentor/StudentsRating'
import MentorProjects from './Mentor/StudentsProjects'
import CreateCourse from './Mentor/CreateCourse'

//students pages
import StudentHome from './Student/Home'
import StudentProfile from './Student/Profile'
import StudentCourse from './Student/Course'
import StudentRating from './Student/Rating'
import StudentScores from './Student/Scores'
import StudentPageLayout from './Student/components/StudentPageLayout'
import StudentProject from './Student/Projects'
import StudentBooks from './Student/Book'
import StudentSchedule from './Student/Schedule'
import LessonPage from './Student/Course/components/LessonPage'
import MentorNotifications from './Mentor/Notifications'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/auth" element={<Authorization />} />

        <Route path="/mentor" element={<MentorPageLayout />}>
          <Route path="home" element={<MentorHome />} />
          <Route path="profile" element={<MentorProfile />} />
          <Route path="lecture" element={<MentorLecture />} />
          <Route path="visits" element={<MentorVisits />} />
          <Route path="schedule" element={<MentorSchedule />} />
          <Route path="student-list" element={<MentorStudentsList />} />
          <Route path="student-rating" element={<MentorStudentsRating />} />
          <Route path="student-projects" element={<MentorProjects />} />
          <Route path='create-course' element={<CreateCourse/>}/>
          <Route path='notifications' element={<MentorNotifications/>}/>
        </Route>

        <Route path="/student" element={<StudentPageLayout />}>
          <Route path="home" element={<StudentHome />} />
          <Route path="schedule" element={<StudentSchedule />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="course" element={<StudentCourse />}/>
          <Route path="rating" element={<StudentRating />} />
          <Route path="score" element={<StudentScores />} />
          <Route path="projects" element={<StudentProject />} />
          <Route path="books" element={<StudentBooks />} />
          <Route path="course/lesson" element={<LessonPage />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default Routing

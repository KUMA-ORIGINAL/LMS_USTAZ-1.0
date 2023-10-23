import { Route, Routes } from "react-router-dom";

import Introduction from "./Introduction";
import Authorization from "./Authorization";



//import admin panel pages
import Dashboard from "./Admin/Dashboard";
import ViewMentors from "./Admin/ViewMentors";
import ViewCourses from "./Admin/ViewCourses";
import ViewStudents from "./Admin/ViewStudents";
import AdminLayout from "./Admin/Components/AdminLayout";
import StatProfit from "./Admin/StatProfit";
import StatExpenses from "./Admin/StatExpenses";
import SalesFunnel from "./Admin/SalesFunnel";
import ViewMail from "./Admin/ViewMail";


import StudentHome from "./Students/Home";
import StudentProfile from "./Students/Profile";
import StudentCourse from "./Students/Course";
import StudentRating from "./Students/Rating";
import StudentPageLayout from "./Students/components/StudentPageLayout";
import PrivateRoute from "./Students/components/PrivateRoute";


const Routing = () => {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Introduction />} />
        <Route path="/auth" element={<Authorization />} />

        <Route path="/student" element={<PrivateRoute><StudentPageLayout/></PrivateRoute> }>
          <Route path="home" element={<StudentHome/>}/>
          <Route path="profile" element={<StudentProfile/>}/>
          <Route path="course" element={<StudentCourse/>}/>
          <Route path="rating" element={<StudentRating/>}/>
        </Route>
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="view-mentors" element={<ViewMentors />} />
          <Route path="view-courses" element={<ViewCourses />} />
          <Route path="view-students" element={<ViewStudents />} />
          <Route path="view-mail" element={<ViewMail />} />
          <Route path="stat-profit" element={<StatProfit/>}/>
          <Route path="stat-expenses" element={<StatExpenses/>}/>
          <Route path="sales-funnel" element={<SalesFunnel/>}/>
        </Route>
        
      </Routes>
    </>
  );
};

export default Routing;

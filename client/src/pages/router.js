import { Route, Routes } from "react-router-dom";

import Introduction from "./Introduction";
import Profile from "./Profile";
import Authorization from "./Authorization";

import Course from "./Course";
import Rating from "./Rating";

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


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/lecture" element={<Course />} />
        <Route path="/course/rating" element={<Rating />} />

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

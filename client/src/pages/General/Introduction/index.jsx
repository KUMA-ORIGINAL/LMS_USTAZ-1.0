import Header from "./components/Header";
import Advantages from "./components/Advantages";
import Courses from './components/Courses';
import Footer from "./components/Footer";
import Application from "./components/Application";
import Metods from "./components/Metods"
import Questions from "./components/Questions";
const Introduction = () => {
  return (
    <div >
      <Header/>
      <Advantages/>
      <Courses/>
      <Metods/>
      <Questions/>
      <Application/>
      <Footer/>
    </div>
  )
}

export default Introduction

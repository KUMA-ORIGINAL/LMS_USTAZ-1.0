import ProjectImg from "../../../../../assets/images/project.png";
import "./index.css";

const ProjectCard = ({data}) => {
  const { title, category, date, student } = data;
  return (
    <div className='project-card'>
        <img src={ProjectImg} alt="" className="project__card-img" />
        <p className="project__card-category">{category}</p>
  
        <h4 className="project__card-title">{title}</h4>
        <a target="_blank" href="https://docs.google.com/document/d/1sDhuSUjpfrdGTN0JJSFz0ywbfHUxXSrcPSAqZjfzmwI/edit" className="project__card-btn">Просмотреть</a>
      <div className="project__card-footer"> <p>{student}</p> <p className="project__card-data">{date}</p></div> 
    </div>
  )
}

export default ProjectCard;
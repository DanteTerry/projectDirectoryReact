import "./Projects.scss";

function Projects({ date, title, subTile, desc }) {
  return (
    <div className="projectDiv">
      <p className="date">Last Update: {date}</p>
      <div className="techStack tags">
        <div className="designTag html">
          <img className="code" src="/src/assets/html-5.png" alt="html" />
          <span>HTML</span>
        </div>
        <div className="designTag css">
          <img className="code" src="/src/assets/css-3.png" alt="css" />{" "}
          <span>CSS</span>
        </div>
        <div className="designTag javascript">
          <img className="code" src="/src/assets/js.png" alt="javascript" />
          <span>JAVASCRIPT</span>
        </div>
      </div>
      <h2 className="secondary_heading">{title}</h2>
      <p className="forth_heading">{subTile}</p>

      <p className="project_para">{desc}</p>

      <div className="btns">
        <a href="#" className="cta links">
          Live Demo
        </a>
        <a href="#" className="cta links">
          Repository
        </a>
      </div>
    </div>
  );
}

export default Projects;

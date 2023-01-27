import "./Works.css";
import { PROJECTS } from "../data";

const Works = () => {
  return (
    <div className="project">
      <div className="project__intro">
        <div className="project__header">
          <h1>Works</h1>
        </div>
      </div>
      <div className="project__container">
        {PROJECTS.map((project, key) => {
            return (
              <div key={key } className="project__card">
                <div className="project__img">
                  <img src={project.projectImage} alt="" />
                </div>
                <div className="pro__details">
                  <div className="pro__btns">
                    <a
                      href={project.viewLink} target="_blank" rel="noreferrer"
                      className="btn btn__light">View
                    </a>
                    {/* <a
                      href={project.sourceLink} target="_blank" rel="noreferrer"
                      className="btn btn__light">Source
                    </a> */}
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Works


import "./Skills.css";

import React from 'react'

import { BsPatchCheckFill } from "react-icons/bs"

const Skills = () => {
  
  const frontskills = ["HTML", "CSS", "Git", "JavaScript", "jQuey", "Sass", "Bootstrap", "React", ];
  const backskills = ["Python", "Django"];

  return (
    <div className="skills">
      <div className="skills__intro">
        <div className="skills__header">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="skills__container">
        <div className="skills__card">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            {frontskills.map((skill) => {
              return (
                <article className="skills__details">
                  <BsPatchCheckFill className= "skills-details-icon" />
                  <div>
                    <h4>{skill}</h4>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="skills__card">
          <h3>Backend Development</h3>
          <div className="skills__content">
            {backskills.map((skill) => {
              return (
                <article className="skills__details">
                  <BsPatchCheckFill className= "skills-details-icon" />
                  <div>
                    <h4>{skill}</h4>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

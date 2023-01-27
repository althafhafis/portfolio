import "./AboutContent.css";

import React from 'react'
import ME from "../assets/images/avatar01.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="about__intro">
        <div className="about__header">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="about__container">
        <div className="about__photo">
          <img src={ME} alt="" />
        </div>
        <div className="about__me">
          <h1>Althaf Hafis Umer</h1>
          <p>I'am a Full Stack Web Devloper with 1 year of experience in front-end and back-end development.</p>
          <a className='btn btn__light' href='Althaf Hafis.pdf' download='Althaf Hafis.pdf'>DOWNLOAD RESUME</a>
        </div>
      </div>
    </div>
  )
}

export default AboutContent

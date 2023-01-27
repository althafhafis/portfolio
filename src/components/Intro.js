import "./Intro.css";

import React from 'react'
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__heading">
          <h1>
            I'am
            <span> Althaf Hafis</span>
          </h1>
          <p>
            <Typewriter
              options={{
                strings: [
                    "User Interface Developer",
                    "Python / Django Developer",
                    "React Developer",
                ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
              }}
            />
          </p>
          <div>
            <Link to="/contact" className=" btn btn__light">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro

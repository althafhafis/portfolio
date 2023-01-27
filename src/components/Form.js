import "./Form.css";
import { MEDIAS } from "../data";

import React from 'react'

const Form = () => {
  return (
    <div className="contact">
      <div className="contact__intro">
        <div className="contact__header">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__left">
          <h2>Get in touch</h2>
          <p>Ushas Villa House, Vattapparamba<br></br>Kondotty P.O, Kerala, India<br></br>673638 PIN.</p>
          <span>althafhafis07@gmail.com</span>
          <span>+91 8606042829</span>
        </div>
        <div className="contact__right">
          <form className="contact__form">
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <textarea id="subject" name="subject" placeholder="Let's talk"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="social__media">
        {MEDIAS.map((media) => {
            return (
              <a
                  href={media.link} target="_blank" rel="noreferrer">
                  <span>{media.mediaImage}</span>
              </a>
            )
        })}
      </div>
    </div>
  )
}

export default Form

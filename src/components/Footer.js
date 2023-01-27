import "./Footer.css";
import { MEDIAS } from "../data";

import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
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
    </footer>
  )
}

export default Footer

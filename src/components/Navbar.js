import "./Navbar.css";

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", transitionNavbar)
      return () => {
        window.removeEventListener("scroll", transitionNavbar)
      }
    }, [])

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className={`header ${show && 'header_black'}`}>
      <nav className="nav wrapper">
        <ul className={click ? "nav__menu active" : "nav__menu"}>
          <li className="nav__list">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav__list">
            <Link to='/about'>About</Link>
          </li>
          <li className="nav__list">
            <Link to='/project'>Projects</Link>
          </li>
          <li className="nav__list">
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className="toggle" onClick={handleClick}>
          {click ? (
            <FaTimes className="nav__close" />
          ) : (
            <FaBars className="nav__bar" />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { Button } from "./Button"

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener("resize", showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Quinn McHugh
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          </ul>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
          </ul>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/#about-me"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
          </ul>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/#resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
          </ul>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/#projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/#design"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Design
              </Link>
            </li>
          </ul>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/#hire-me"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hire Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="buttonStyle">SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar

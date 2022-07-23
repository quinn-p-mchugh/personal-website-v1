import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
import './navbar.css';
import { Button } from './button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'


function Navbar() {
  const [click, mobileMenuClicked] = useState(false);

  const handleClick = () => mobileMenuClicked(!click);
  const closeMobileMenu = () => mobileMenuClicked(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <Logo alt="Quinn McHugh Personal Logo" style={{ maxHeight: 100, width: 100 }} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faXmark : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/#blog' className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/#resume' className='nav-links' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/#design' className='nav-links' onClick={closeMobileMenu}>
                Design
              </Link>
            </li>
          </ul>

          <ul className='social-menu'>
            <li className='nav-item'>
              <a href="https://www.instagram.com/qm_creative/">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://www.instagram.com/qm_creative/">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://www.instagram.com/qm_creative/">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
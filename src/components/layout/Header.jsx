import React, { useState } from 'react'
import Logo from './assets/logo.png'
import { HashLink } from "react-router-hash-link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./header.css"

function Header({navLinks}) {
  const [isNavExpended, setIsNavExpanded] = useState(false);

  const handleClick = () => setIsNavExpanded(!isNavExpended);

  return (
    <header>
      <nav className='containerr grid navbar'>
        <HashLink className= "navbar-logo" to = '/'>
          <img src={Logo} alt="Little Lemon" />
        </HashLink>

        <button className='navbar-hamburger' type='button' onClick={handleClick}>
          {isNavExpended ? (<FontAwesomeIcon icon={faAngleLeft} />) : (<FontAwesomeIcon icon={faBars} />)}
        </button>

        <ul className={isNavExpended ? "navbar-links expanded" : "navbar-links"}>
          {navLinks.map((navLink) => (
            <li key={navLink.name} onClick={() => setIsNavExpanded(false)} className='hover-navlinks'>
              {navLink.hashLink ? (<HashLink to={navLink.path}>{navLink.name}</HashLink>) :
                                  (<Link to={navLink.path}>{navLink.name}</Link>)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
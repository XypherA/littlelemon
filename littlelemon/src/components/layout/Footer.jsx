import { faCompass, faPhoneFlip, faAt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,  faInstagram, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './footer.css'
import footerLogo from "./assets/logo-white.png"

const contacts = [
  {icon: faCompass, info:"Mentiri, Simpang 240"},
  {icon: faPhoneFlip, info:"+673 1233456789"},
  {icon: faAt, info:"littlelemon@gmail.com"},
];

const socials = [
  {icon: faFacebookF, name:"facebook"},
  {icon: faInstagram, name:"instagram"},
  {icon: faXTwitter, name:"twitter"},
  {icon: faYoutube, name:"youtube"},
]

function Footer({navLinks}) {
  return (
    <footer className='footer'>
      <img className="footer-logo" src={footerLogo} alt="Little Lemon" />
      <nav className='footer-nav'>
        <h4>Sitemap</h4>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}><HashLink to={navLink.path}>{navLink.name}</HashLink></li>
          ))}
        </ul>
      </nav>
      <div className='footer-contact'>
        <h4>Contact us</h4>
        <address>
          {contacts.map((contact,index) => (
            <p key={index}> <FontAwesomeIcon icon={contact.icon}/> {contact.info} </p>
          ))}
        </address>
      </div>
      <div className='footer-social'>
        <h4>Connect with us</h4>
        {socials.map((social, index) => (
          <a href={`www.${social.name}.com`} key={index} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={social.icon}/>
          </a>
        ))}
      </div>

    </footer>
  )
}

export default Footer
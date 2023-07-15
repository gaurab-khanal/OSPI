import React from 'react'
import NavBar from './NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Base = ({title, description, className, children}) => {
    
    
  return (
    <div>
    <NavBar/>
        <div className="container-fluid">
            <div className=" text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
           <div className={className}>{children}</div>
        </div>
        <hr />
        <footer className="footer">
      <div className="container text-center">
        <p>&copy; 2023 OSIP. All rights reserved.</p>
        <p>Morang, Nepal</p>
        <p>Phone: (+977) 9725252525 | Email: osip@gmail.com</p>
        <h2>Contact Us</h2>
        <div className="footer-icon">
        <a href="https://twitter.com/OSPI_7">
        <FontAwesomeIcon icon={faTwitter} className='icons'/>
        </a>
        <a href="https://github.com">
        <FontAwesomeIcon icon={faGithub} className='icons'/>
        </a>
        <a href="https://instagram.com">
        <FontAwesomeIcon icon={faInstagram} className='icons'/>
        </a>

        
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Base
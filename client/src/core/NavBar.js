import {React, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { isAuthenticated, signout } from '../auth/helper'





const currentTab = (history, path)=>{
    if (window.location.pathname === path){
        return {color: "#0352fc"}
    }else{
        return {color: "#fff"}
    }
}

const NavBar = ({history}) => {
    
        const [isCollapsed, setIsCollapsed] = useState(false);
      
        const toggleCollapse = () => {
          setIsCollapsed(!isCollapsed);
        }
      
    const navigate = useNavigate();
    const handleContributeClick = () => {
        window.open('https://github.com', '_blank');
      };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
       <img src="https://vates.tech/assets/img/logos/logo-vates.png" alt="" style={{"height":"100px", "margin-left":"-60px"}}/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleCollapse}
        aria-controls="navbarNavDropdown"
        aria-expanded={isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse${isCollapsed ? " show" : ""}`}
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              style={currentTab(history, "/")}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={currentTab(history, "/list")}
              to="/list"
            >
              Programs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={currentTab(history, "/contribute")}
              onClick={handleContributeClick}
              to="#"
            >
              Contribute
            </Link>
          </li>

          {isAuthenticated() && (
            <li className="nav-item">
              <Link
                style={currentTab(history, '/add')}
                className="nav-link"
                to="/add"
              >
                Add Programs
              </Link>
            </li>
          )}

          {!isAuthenticated() && (
            <>
              <li className="nav-item">
                <Link
                  style={currentTab(history, '/signup')}
                  className="nav-link"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  style={currentTab(history, '/signin')}
                  className="nav-link"
                  to="/signin"
                >
                  Sign In
                </Link>
              </li>
            </>
          )}

          {isAuthenticated() && (
            <li className="nav-item">
              <span
                className="nav-link text-warning"
                onClick={() => {
                  signout(() => {
                    navigate('/');
                  });
                }}
              >
                Sign Out
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
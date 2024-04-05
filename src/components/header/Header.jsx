import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/logo1.png"
import './style.scss'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <nav className="navbar">
      <div className="container-1">
        <div className="logo">
          <Link to = '/'><img src={logo} alt="" /></Link>
        </div>
        <div className="menu-icon" onClick={()=> setShowNavbar(!showNavbar)} >
        {
                    showNavbar ? (
                        <GrClose />
                    ) : (
                        <SlMenu />
                    )
                }
          {/* <SlMenu /> */}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul onClick={()=> setShowNavbar(!showNavbar)}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
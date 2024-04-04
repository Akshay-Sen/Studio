// import React, { useState } from 'react'
// import "./style.scss"
// import { SlMenu } from "react-icons/sl";
// // import { IoClose } from "react-icons/io5";
// import logo from "../../assets/logo.png"
// import { Link, NavLink } from 'react-router-dom';



// function Header() {

// // const [isMobile, setIsMobile] = useState(false);

//     return (
//         <div className='header'>
//             <div className="logo">
//                 <img src= {logo} alt="" />
//             </div>
//             <div className="navbar">
//                 <nav>
//                     <ul>
//                         <li><Link to="">Home</Link></li>
//                         <li><Link to="about">about</Link></li>
//                         <li><Link to="services">Services</Link></li>
//                         <li><Link to="gallery">Gallery</Link></li>
//                         <li><Link to="contact">Contact</Link></li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="menu-bar">
//                 <SlMenu />
//             </div>
//         </div>

//         // <nav className='navbar'>
//         //     <div className='logo'> Logo </div>
//         //     <ul className= { isMobile ? "nav-links-mobile" : "nav-links"}>
//         //         <li>
//         //             <NavLink to="/" >Home</NavLink>
//         //         </li>
//         //         <li>
//         //             <NavLink to="/about" >About</NavLink>
//         //         </li>
//         //         <li>
//         //             <NavLink to="/services" >Services</NavLink>
//         //         </li>
//         //         <li>
//         //             <NavLink to="/gallery" >Gallery</NavLink>
//         //         </li>
//         //         <li>
//         //             <NavLink to="/contact" >Contact</NavLink>
//         //         </li>
//         //     </ul>

//         //     <button className='mobile-menu-icon'
//         //     onClick={()=> setIsMobile(!isMobile)}
//         //     >
//         //         {
//         //             isMobile ? (
//         //                 <IoClose />
//         //             ) : (
//         //                 <SlMenu />
//         //             )
//         //         }
//         //     </button>

//         // </nav>
//     )
// }

// export default Header


import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
import { SlMenu } from "react-icons/sl";
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import logo from "../../assets/logo1.png"
import './style.scss'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container-1">
        <div className="logo">
         <img src={logo} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <SlMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
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
import React, { useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  const openMenu = () => setMobileMenuOpen(true);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>Shubham</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <img src={menu_open} onClick={openMenu} alt="menu icon" className='nav-mob-open' />
      <ul className={`nav-menu ${mobileMenuOpen ? 'show-menu' : ''}`}>
        <img src={menu_close} onClick={closeMenu} alt="close" className="nav-mob-close" />
        <li onClick={() => { setMenu("home"); closeMenu(); }} className={menu === "home" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={-100} href="#home"><p>Home</p></AnchorLink>
        </li>
        <li onClick={() => { setMenu("about"); closeMenu(); }} className={menu === "about" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={-100} href="#about"><p>About Me</p></AnchorLink>
        </li>
        <li onClick={() => { setMenu("services"); closeMenu(); }} className={menu === "services" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={-100} href="#services"><p>Services</p></AnchorLink>
        </li>
        <li onClick={() => { setMenu("portfolio"); closeMenu(); }} className={menu === "portfolio" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={-100} href="#portfolio"><p>Portfolio</p></AnchorLink>
        </li>
        <li onClick={() => { setMenu("contact"); closeMenu(); }} className={menu === "contact" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={-100} href="#contact"><p>Let's Connect</p></AnchorLink>
        </li>
      </ul>

      {/* Connect button for desktop */}
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={-100} href="#contact">Connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;

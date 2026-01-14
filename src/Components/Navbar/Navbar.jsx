import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logomain.png'
import menu_icon from '../../assets/menu-bar.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const[sticky, setSticky] = useState(false);

    useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
    },[]);

    const[mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
   mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt=""  className='logo' />
      <ul className={mobileMenu ? '': 'hide-mobile-menu'}>
  <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
 {/*<li><Link to='shows' smooth={true} offset={-260} duration={500}>Shows</Link></li> */} 
  <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
  <li><Link to='species' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
  <li><Link to='schedule' smooth={true} offset={-260} duration={500}>Schedule</Link></li>
  {/* Destination is 'Footer' */}
  <li><Link to='Footer' smooth={true} offset={-260} duration={500} className='btn'>Follow Us</Link></li>
</ul>
<img src={menu_icon} alt="" className='menu-bar' onClick={toggleMenu}/> 
    </nav>
  )
}

export default Navbar

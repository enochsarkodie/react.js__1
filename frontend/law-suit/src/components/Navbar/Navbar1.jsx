import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/blc logo.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link as LinkRoute} from 'react-router-dom'
import Home from '../Home/Home'
import PracticeAreas from '../PracticeAreas/PracticeAreas'


const Navbar1 = ()=>{

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false); 
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}` }>
           <img src={logo} alt="" className='logo'></img>
           <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <LinkRoute to='/' element={<Home/>}> <li>Home</li></LinkRoute>
             <LinkRoute to='/practice-areas' element={<PracticeAreas/>}><li>Practice Areas</li></LinkRoute>
             <li>About Us</li>
             <li>The team</li>
             <li>Testimonials</li>
             <li className='btn'>Contact us</li>
            
           </ul> 
           <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar1;
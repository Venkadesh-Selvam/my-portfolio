import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll';
import Menu from '../../assets/menu.png'


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className='navigationBar'>
        <img src={logo} alt='logo img' className='logo'/>
        <div className='navMenu'>
          <Link 
            activeClass='active' 
            to='intro' 
            spy={true} 
            smooth={true}
            offset={-100}
            duration={500}
            className='navMenuItem'
          >
            Home
          </Link>
          <Link 
            activeClass='active' 
            to='skills' 
            spy={true} 
            smooth={true}
            offset={-70}
            duration={500}
            className='navMenuItem'
          >
            About
          </Link>
          <Link 
            activeClass='active' 
            to='myportfolio' 
            spy={true} 
            smooth={true}
            offset={-70}
            duration={500}
            className='navMenuItem'
          >
            Portfolio
          </Link>
          <Link 
            activeClass='active' 
            to='projects' 
            spy={true} 
            smooth={true}
            offset={-70}
            duration={500}
            className='navMenuItem'
          >
            Projects
          </Link>
        </div>
        <button 
          className='navContactBtn' 
          onClick={
            ()=>{
              document.getElementById('contactMe').scrollIntoView({behaviour:'smooth'});
            }}>
              <img src={contact} alt='' className='navContactBtnImg' />
              Connect Me
        </button>
        <img 
          src={ Menu } 
          alt='menu' 
          className='mobileMenu'
          onClick={()=>{setShowMenu(!showMenu)}}
        />
        <div 
          className='navigationMenu' 
          style={{display:showMenu?'flex':'none'}}
        >
            <Link 
              activeClass='active' 
              to='intro' 
              spy={true} 
              smooth={true}
              offset={-100}
              duration={500}
              className='menuItem'
              onClick={()=>{setShowMenu(false)}}
            >
              Home
            </Link>
            <Link 
             activeClass='active' 
              to='skills' 
              spy={true} 
              smooth={true}
              offset={-70}
              duration={500}
              className='menuItem'
              onClick={()=>{setShowMenu(false)}}
            >
              About
            </Link>
            <Link 
              activeClass='active' 
              to='myportfolio' 
              spy={true} 
              smooth={true}
              offset={-70}
              duration={500}
              className='menuItem'
              onClick={()=>{setShowMenu(false)}}
            >
              Portfolio
            </Link>
            <Link 
              activeClass='active' 
              to='projects' 
              spy={true} 
              smooth={true}
              offset={-70}
              duration={500}
              className='menuItem'
              onClick={()=>{setShowMenu(false)}}
            >
              Projects
            </Link>
            <Link 
              activeClass='active' 
              to='contactMe' 
              spy={true} 
              smooth={true}
              offset={-70}
              duration={500}
              className='menuItem'
              onClick={()=>{setShowMenu(false)}}
            >
              Contact
            </Link>
        </div>
      </nav>
      
    </div>
  )
}

export default NavBar

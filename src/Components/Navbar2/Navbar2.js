import React from 'react'
import '../Navbar2/Navbar2.css'
import logo from '../../Assets/CSS_LOGO.png'

function Navbar2() {
  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo}></img>
        </div>
        <nav>
            <ul className='nav_links'>
            <li><a href='#'>inicio</a></li>
            <li><a href='#SobreMi'>Sobre mi</a></li>
            <li><a href='#Skills'>Habilidades</a></li>
            </ul>
        </nav>
        <a href='#' className='btn'><button>Contactame</button></a>
    </header>
  )
}

export default Navbar2

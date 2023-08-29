import React from 'react'
import '../Navbar/Navbar.css'

const NavBarr = () => {
  return (
    <div className='container_menu'>
      <ul className='menu'>
        <li><a href='#'>inicio</a></li>
        <li><a href='#'>Sobre mi</a></li>
        <li><a href='#skills'>Habilidades</a></li>
        <li><a href='#'>Proyectos</a></li>
        <button className='boton_navbar'>hola</button>
      </ul>
    </div>
  )
}

export default NavBarr

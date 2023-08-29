import React from 'react'
import imagen from '../../Assets/PERFIL.JPG'
import '../Menu/Menu.css'

const Menu = () => {
  return (
   <header className='container_header'>
    <div className='header_texto'>
      <p className='nombre'>Santiago Madrid Ortiz</p>
      <p className='profesion'>Desarrollador web</p>
    </div>
    <div className='header_img'>
      <img src={imagen}></img>
    </div>
   </header>
  )
}

export default Menu

import React from 'react'
import imagen from '../../Assets/prueba4_perfil.jpeg'
import '../Home_/Home.css'


const Menu = () => {
  return (
   <header className='container_header'>
    <div className='header_texto'>
      <p className='nombre'>Soy <br></br>Santiago Madrid Ortiz</p>
      <p className='profesion'>Desarrollador web</p>
      <div className='contenedor_descripcion_home'>
        <p className='descripcion_home'> Estoy actualmente estudiando analisis y Desarrollo de Software</p>
      </div>
      <button className='boton_curriculum'>CV</button>
    </div>
    <div className='header_img'>
      <img src={imagen}></img>
    </div>
   </header>
  )
}

export default Menu

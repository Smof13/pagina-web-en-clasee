import React from 'react'
import '../SobreMi/SobreMi.css'
import imagenSobreMi from '../../Assets/prueba2_perfil.jpeg'

function SobreMi() {
  return (
   <section className='container_sobremi' id='SobreMi'>
    <div className='contenedor_img_sobre_mi'>
      <img src={imagenSobreMi}></img>
    </div>
    <div className='contenedor_info_SMI'> <h3 className='titulo_sobremi'>Sobre mí</h3>
        <p className='description_sobremi'>¡Hola! Soy Santiago Madrid, estudiante de Análisis y Desarrollo de Software.</p>
        <section>
          <p className='parrafos_sobremi'>Desarrollador Apasionado: Amante de la programación y la creación. Mi objetivo es convertir ideas en soluciones digitales atractivas y funcionales.</p>
          <p className='parrafos_sobremi'>Mi Enfoque: Creo en el poder de la tecnología para resolver problemas. Siempre en busca de la elegancia en el código y la usabilidad en el diseño</p>
          <p className='parrafos_sobremi'>Más allá del código: Cuando no estoy programando, me fascina hacer ejercicio, ver series, peliculas o simplemente salir a distraerme. El equilibrio entre el mundo digital y el real es clave</p>
        </section></div>
   </section>
  )
}

export default SobreMi

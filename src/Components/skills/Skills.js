import React from 'react'
import '../skills/Skills.css'
import { Button } from '@mui/material'

const Skills = ({logoP,texto,description}) => {
  return (
      <section className='container_cards'>
       <img src={logoP}></img>
       <h1 className='titulo_Cards'>{texto}</h1>
       <div className='container_description'>
        <p className='descripcion_cards'>{description} </p>
       </div>
      </section>
  )
}

export default Skills

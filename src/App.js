import './App.css';
import Menu from './Components/Home_/Home';
import Skills from './Components/skills/Skills';
import logoHTML from './Assets/HTML_LOGO.png'
import logoCSS from './Assets/CSS_LOGO2.png'
import logoReact from './Assets/REACT_LOGO.png'
import logoMySQL from './Assets/MySQL_LOGO.png'
import logoSQL from './Assets/SQL_LOGO.png'
import logoC from './Assets/C_LOGO.png'
import imgProyec from './Assets/Galacticx.jpeg'
import logoGithub from './Assets/Github_LOGO.png'
import logoJAVASCRIPT from './Assets/JAVASCRIP_LOGO.png'
import SobreMi from './Components/SobreMi/SobreMi';
import Navbar2 from './Components/Navbar2/Navbar2';
import Proyectos from './Components/Proyectos/Proyectos';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Menu/>
      <SobreMi/>
      <div id = 'Skills'>
        <h1 className='titulo_habilidades'>Habilidades</h1>
          <div className='estilo_cards_concat'>
            <Skills logoP={logoHTML} texto={'HTML'}/>
            <Skills logoP={logoCSS} texto={'CSS'}/>
            <Skills logoP={logoJAVASCRIPT} texto={'JAVASCRIPT'}/>
            <Skills logoP={logoReact} texto={'React'}/>
            <Skills logoP={logoMySQL} texto={'MySQL'}/>
            <Skills logoP={logoSQL} texto={'SQL'}/>
            <Skills logoP={logoC} texto={'C#'}/>
            <Skills logoP={logoGithub} texto={'GitHub'}/> 
          </div>
      </div>
      <div id='proyectos'>
        <h1 className='titulo_proyectos'>Proyectos</h1>
            <div className='estilos_cards_proyectos'>
            <Proyectos imgsP={imgProyec} titulo_pagina={'GalacticX'} descripcion={'este proyecto lo realice en clase para un trabajo final'} imgsH={logoHTML} imgsC={logoCSS} imgsJ={logoJAVASCRIPT} verProyecto={'ver proyecto'} enlace={'https://galacticx.netlify.app/#'}/> 
            </div>
        </div>
          <Footer/>
      </div>
  );
}

export default App;

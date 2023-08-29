import './App.css';
import Menu from './Components/Menu/Menu';
import NavBarr from './Components/Navbar/NavBarr';
import Skills from './Components/skills/Skills';
import logoHTML from './Assets/HTML_LOGO.png'
import logoCSS from './Assets/CSS_LOGO2.png'
import logoJAVASCRIPT from './Assets/JAVASCRIP_LOGO.png'
import { Height } from '@mui/icons-material';
import BotonSkills from './Components/boton_skills/BotonSkills';
import SobreMi from './Components/SobreMi/SobreMi';
import Navbar2 from './Components/Navbar2/Navbar2';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      {/* <NavBarr/> */}
      <Menu/>
      <SobreMi/>
      <div id = 'skills'>
          <div className='estilo_cards_concat'>
            <Skills logoP={logoHTML} texto={'HTML'} description={'Tengo conocimientos basicos de HTML'}/>
            <Skills logoP={logoCSS} texto={'CSS'} description={'Tengo conocimientos basicos en CSS'}/>
            <Skills logoP={logoJAVASCRIPT} texto={'JAVASCRIPT'} description={'Tengo conocimientos basicos en JAVASCRIPT'}/>
          </div>
          <BotonSkills/>
      </div>
      </div>
  );
}

export default App;

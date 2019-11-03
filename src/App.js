import React from 'react';
import './App.css';
import Main from './components/main';
import { Layout, Textfield, HeaderRow, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from "react-scroll";

import LandingPage from './components/landingPage';
import Resume from './components/resume';
import Projects from './components/projects';
import AboutMe from './components/aboutMe';
function App() {
  return (
    <div className="demo-big-content">
      
      <Header className="header-color landing-grid" style={{textAlign:'left', justifyContent:'center',margin:'auto'}} waterfall>
        <HeaderRow style={{textAlign:'center', justifyContent:'center',margin:'auto', position: 'fixed', width:'100%'}}
        className="header-color" >
          <Navigation >
            <Link style={{fontSize:'25px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="landing-page"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Landing</Link>
            <Link style={{fontSize:'25px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Projects</Link>
            <Link style={{fontSize:'25px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >About</Link>
            <Link style={{fontSize:'25px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Experience</Link>
          </Navigation>
        </HeaderRow>
      </Header>
 


      <LandingPage />

      <Projects />
      <AboutMe/>
      <Resume />

    </div>

  );
}

export default App;

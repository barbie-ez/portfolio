import React from 'react';
import './App.css';
import {HeaderRow, Header, Navigation } from 'react-mdl';
import { Link } from "react-scroll";

import LandingPage from './components/landingPage';
import Projects from './components/projects';
import AboutMe from './components/aboutMe';
import WorkExp from './components/workExp';
import Contacts from './components/contacts';
function App() {
  return (
    <div className="demo-big-content">
      
      <Header className="header-color landing-grid" style={{textAlign:'left', justifyContent:'center',margin:'auto'}} waterfall>
        <HeaderRow style={{textAlign:'center', justifyContent:'center',margin:'auto', position: 'fixed', width:'100%'}}
        className="header-color" >
          <Navigation >
            <Link style={{fontSize:'20px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="landing-page"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><i className="fa fa-home title"></i></Link>
            <Link style={{fontSize:'20px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Portfolio</Link>
            <Link style={{fontSize:'20px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >About</Link>
          
            <Link style={{fontSize:'20px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="workexp"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Work Experience</Link>

            <Link style={{fontSize:'20px', fontFamily:"'Open Sans', sans-serif", fontWeight:'bold', textTransform:'uppercase'}}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Contact</Link>
          </Navigation>
        </HeaderRow>
      </Header>
 


      <LandingPage />

      <Projects />
      <AboutMe/>
      
      <WorkExp/>
      <Contacts/>

    </div>

  );
}

export default App;

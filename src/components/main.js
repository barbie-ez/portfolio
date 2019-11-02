import React from "react";
import { Route, Switch } from 'react-router-dom';
import LandingPage from "./landingPage";
import AboutMe from "./aboutMe";
import Contacts from "./contacts";
import Projects from "./projects";
import Resume from "./resume";

function Main(){
  return(
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/contact" component={Contacts} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
  )
};

export default Main;
import React from "react";
import { Grid, Cell } from 'react-mdl';
function AboutMe() {
  return (
    <div id="aboutMe" className="landing-grid">
      <Grid style={{ width: '85%' , margin:'auto'}} className="profile">
      <Cell col={12}><h3 style={{fontFamily:"Raleway", fontWeight:"700"}} className="text-center"><i style={{fontSize:'1em'}} className="fa fa-bookmark"></i>What I Do</h3></Cell>
        <Cell col={4} style={{ textAlign: 'left' }}>
          <i className="fa fa-android" aria-hidden="true" />
          <h4 className="text-uppercase">Mobile Applications</h4>
          <p>Cross platform application development using Xamarin and React native (IOS & Android)</p>
        </Cell>
        <Cell col={4} style={{ textAlign: 'left' }}>
          <i className="fa fa-code" aria-hidden="true" />
          <h4 className="text-uppercase">Web Applications</h4>
          <p>Web Application, Web API and Front end development using technologies such as ASP.Net Core, React, Node, SQl server and Docker</p>
        </Cell>
        <Cell col={4} style={{  textAlign: 'left' }}>
          <i className="fa fa-magic" aria-hidden="true" />
          <h4 className="text-uppercase">SQL Server Administration</h4>
          <p>Database Administration of SQL Server Databases, backup and data management</p>
        </Cell>
        
      </Grid>
    </div>
  );
}

export default AboutMe;

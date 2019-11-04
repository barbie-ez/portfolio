import React from "react";
import { Grid, Cell } from 'react-mdl';
import ExperienceList from './experienceList';
import UniversityList from "./universityList";
function WorkExp() {
    return (
        <div id="workexp" className="experience-grid">
            <Grid style={{ width: '85%' , margin: "auto"}} className="profile">
                <Cell col={6} style={{ textAlign: 'left', padding: '20px' }}>

                    <h3 className="text-capitalise">
                        <i style={{ color: '#f5a623', fontSize: "1em" }} className="fa fa-user" aria-hidden="true" />
                        About Me</h3>
                    <p style={{ justifyContent: "space-evenly" }}>Experienced Full Stack Software Developer & Business Analyst equipped with excellent technical and business skills gained from involvement in a series of prestigious projects. Demonstrated history of developing a wide range of applications and tools for Microsoft Windows, Mac OS, Linux, Android and iOS for a range of clients in the Construction, Manufacturing, Education and Finance sectors. Strong programming skills in C# and JavaScript including web development technologies such as ASP.NET, ASP.NET CORE, WEB API, AJAX, JQuery, HTML, CSS and Bootstrap; looking to utilize and continuously develop my capabilities to its fullest potential.</p>
                </Cell>
                <Cell col={3} style={{textAlign: 'left', padding: '20px' }}>

                    <h3 className="text-uppercase"><i style={{ color: '#f5a623', fontSize: "1em" }} className="fa fa-building" aria-hidden="true" />Work History
                    </h3>
                    <ExperienceList workrole='Applications Developer' work="LafargeHolcim" timeline="2017 - present" />
                    <ExperienceList workrole='Graduate Intern' work="Federal University of Technology" timeline="2016 - 2017" />
                </Cell>
                <Cell col={3} style={{ textAlign: 'left', padding: '20px' }}>

                    <h3 className="text-uppercase"><i style={{ color: '#f5a623', fontSize: "1em" }} className="fa fa-graduation-cap" aria-hidden="true" />Education
          </h3>
                    <UniversityList workrole='Computer Science' work="Babcock University" timeline="2011 - 2015" />

                </Cell>
            </Grid>
        </div>
    );
}

export default WorkExp;

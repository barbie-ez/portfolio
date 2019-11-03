import React from "react";
import { Grid, Cell } from 'react-mdl';
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
function Resume() {
  return (
    <div id ="resume">
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={require("../images/photo.jpg")}
              alt="barbie"
              className="avatar-image"
            />
          </div>
          <h2 style={{ paddingTop: '2em' }}>Barbara Ezomo</h2>
          <h4 style={{ color: 'grey' }}>Developer</h4>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

          <p>Experienced Full Stack Software Developer & Business Analyst equipped with excellent technical and business skills gained from involvement in a series of prestigious projects. Demonstrated history of developing a wide range of applications and tools for Microsoft Windows, Mac OS, Linux, Android and iOS for a range of clients in the Construction, Manufacturing, Education and Finance sectors. Strong programming skills in C# and JavaScript including web development technologies such as ASP.NET, ASP.NET CORE, WEB API, AJAX, JQuery, HTML, CSS and Bootstrap; looking to utilize and continuously develop my capabilities to its fullest potential.</p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          <h5>Address</h5>
          <p>10, Mohammed Abu Street, Idowu Estate 2, Ajah, Lagos, Nigeria. </p>
          <h5>Phone Number</h5>
          <p>0803725113</p>
          <h5>Email</h5>
          <p>ezomo.barbara@gmail.com</p>
          <h5>Web</h5>
          <p>barbie.com</p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
        
          <h2>Experience</h2>
          <Experience startYear={2017} endYear={'present'} 
          jobName={'Full Stack Applications Developer'} 
          jobDesc=' Developing full-stack web applications which process, analyze, and render data visually; including coding using technologies such as JAVA, CSS and HTML   Implementation of a ‘Route To Market’ application to monitor secondary sales data across multiple clusters  Design and development of a ‘Letter of Credit’ and ‘Outward Telegraphic Transfer’ workflow tool; fully integrated with multiple banks  Conducting requirements gathering sessions with clients whilst building strong relationships  Design and Implementation of Inventory Management applications for managing various stores across departments  Cross-platform mobile app development using Xamarin  Front-end design, site maintenance, tutoring end users and new developers  Software versioning and source control, managing timesensitive updates, content changes and database upgrades  Single point of contact for maintaining and managing Qlikview & Microsoft BI reports   Gathering requirements and working with third party vendors to deploy various workflow applications  Testing site functionalities, identifying problems, debugging web applications and softwares with complete accuracy'/>
           <Experience startYear={2017} endYear={'present'} 
          jobName={'Graduate Computer Engineer '} 
          jobDesc=' Maximizing applications’ efficiency, data quality, scope, operability, and flexibility whilst maintaining day to day processes to ensure active stability or 99.9% availability for in-house IT infrastructure  Using various ideas from distributed computing, large-scale design, real-time data processing, data storage, ML, and AI to solve challenging dataset problems  Managing, optimizing, and updating PHP databases as necessary  Developing app integration with REST / SOAP and other APIs for Google Maps, social media logins, payment processors, and other services   Installing and configuring computer hardware systems and IT software  Oversaw a data migration project from Geneva & Fusion ERP to SAP ERP  Undertaking analysis, diagnosis and resolution of client problems via phone, e-mail & in person.  Quickly responding to customer enquiries and escalating unresolved problems to other support staff  Monitoring IT networks to ensure availability to all users, testing and evaluating new technology  The conduct of tutorials, practical classes, demonstrations, workshops  Initiation and development of subject material.   The conduct of research and consultation with students 
          '/>
          <hr style={{ borderTop: '3px solid #e22947'}} />
          <h2>Education</h2>
          <Education startYear={2011} endYear={2015} schoolName='Babcock University' schoolDesc='University'/>
          <Education startYear={2007} endYear={2011} schoolName='Cayley College' schoolDesc='High School'/>
          <Education startYear={2001} endYear={2007} schoolName='Ivy Nursery and Primary School' schoolDesc='School'/>
          <hr style={{ borderTop: '3px solid #e22947'}} />
          <h2>Skills</h2>
          <Skills skill='C#' progress={100}/>
          <Skills skill='ASP .Net Core' progress={100}/>
          <Skills skill='JavaScript' progress={80}/>
          <Skills skill='React' progress={80}/>
          <Skills skill='SQL Server' progress={100}/>
          <Skills skill='Node js' progress={60}/>
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;

import React from "react";
import { Grid, Cell } from "react-mdl";

function LandingPage() {
  return (

    <div id ="landing-page" style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
        <div className="circular--landscape"></div>
          <img
            src={require("../images/photo.jpg")}
            alt="barbie"
            className="avatar-image"
          />
          
          <div className="banner-text">
            <h1>Barbara Ezomo</h1>
            <h3>Full Stack Application Developer</h3>
            <hr />
            
            <div className="social-links">
              {/*LinkedIn */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              {/*GitHub */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>
              {/*Youtube */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube" aria-hidden="true" />
              </a>
              
            </div>
          </div>
        </Cell>
      </Grid>
     
    </div>

  );
}

export default LandingPage;

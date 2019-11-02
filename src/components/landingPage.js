import React from "react";
import { Grid, Cell } from "react-mdl";
function LandingPage() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
        
          <img
            src={require("../images/photo.jpg")}
            alt="barbie"
            className="avatar-image"
          />
          
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              C# | ASP.NET Core | React | HTML/CSS | JavaScript | SQL SERVER
            </p>
            <div className="social-links">
              {/*LinkedIn */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/*GitHub */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/*Youtube */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
              
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default LandingPage;

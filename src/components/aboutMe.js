import React from "react";
import { Grid, Cell } from 'react-mdl';
function AboutMe() {
  return (
    <div id="aboutMe" className="landing-grid">
      <Grid style={{ width: '85%' }} className="profile">
        <Cell col={4} style={{ textAlign: 'left' }}>
          <i className="fa fa-android" aria-hidden="true" />
          <h4 className="text-uppercase">Mobile Applications</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </Cell>
        <Cell col={4} style={{ textAlign: 'left' }}>
          <i className="fa fa-android" aria-hidden="true" />
          <h4 className="text-uppercase">Mobile Applications</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </Cell>
        <Cell col={4} style={{  textAlign: 'left' }}>
          <i className="fa fa-android" aria-hidden="true" />
          <h4 className="text-uppercase">Mobile Applications</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </Cell>
      </Grid>
    </div>
  );
}

export default AboutMe;

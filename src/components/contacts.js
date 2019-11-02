import React from "react";
import { Grid, Cell } from "react-mdl";
function Contacts() {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>
                        Barbara Ezomo

                    </h2>
                    <img
                        src={require("../images/photo.jpg")}
                        alt="barbie"
                        style={{ height: '250px' }}
                    />
                    <p style={{width:'75%', margin:'auto',paddingTop:'1em'}}>Hi, I'm a Software Developer from 
                        Nigeria. i have worked on a vast 
                        number of projects and i look 
                        forward to changing the world 
                        with you</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr></hr>
                </Cell>
            </Grid>
        </div>
    );
}

export default Contacts;

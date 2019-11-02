import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
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
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Hi, I'm a Software Developer from
                        Nigeria. i have worked on a vast
                        number of projects and i look
                        forward to changing the world
                        with you</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr></hr>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent 
                                style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>08083725113
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent 
                                style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>ezomo.barbara@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent 
                                style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>barbaraezomo
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                    
                </Cell>
            </Grid>
        </div>
    );
}

export default Contacts;

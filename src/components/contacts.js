import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
function Contacts() {
    return (
        <div className="landing-grid" id="contact">
            <Grid className="" style={{width:"100%", margin:'auto' ,color:'white'}}>
                <Cell col={6}>
                    
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
                                style={{fontSize:'30px',fontFamily:'Anton',color:'white'}}>
                                    <i className="fa fa-phone-square" style={{color:'white'}} aria-hidden="true"/>08083725113
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent 
                                style={{fontSize:'30px',fontFamily:'Anton',color:'white'}}>
                                    <i className="fa fa-envelope" style={{color:'white'}}  aria-hidden="true"/>ezomo.barbara@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent 
                                style={{fontSize:'30px',fontFamily:'Anton',color:'white'}}>
                                    <i className="fa fa-skype" style={{color:'white'}}  aria-hidden="true"/>barbaraezomo
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

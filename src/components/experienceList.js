import React from 'react'
import { ListItem, List } from 'react-mdl';
function ExperienceList(props) {

    return (
        <>
        <h4 style={{ padding:'4px'}} >{props.workrole}</h4>
        <List style={{ padding:'4px'}} >
            <ListItem style={{ padding:'0px', fontSize:'14px', color:'#9b9b9b'}} ><i style={{ color: '#9b9b9b', fontSize: "1em"}} className="fa fa-building" aria-hidden="true" />
                {props.work}</ListItem>
            <ListItem style={{ padding:'0px', fontSize:'14px', color:'#9b9b9b'}} ><i style={{ color: '#9b9b9b', fontSize: "1em" }} className="fa fa-clock-o" aria-hidden="true" />
                {props.timeline}</ListItem>
        </List>
        </>
        );


}

export default ExperienceList;
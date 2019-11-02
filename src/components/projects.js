import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
//import Background from '../images/photo.jpg';
const Background = require("../images/photo.jpg");
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        
        <div className="projects-grid">
        {/*Project 1 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1500/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>

            React Project #1
          </CardTitle>



          <CardText>
            This is where you write all the things your project is supposed to be about
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 2 */}

        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1500/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>

            React Project #2
          </CardTitle>



          <CardText>
            This is where you write all the things your project is supposed to be about
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
         {/*Project 1 */}
         <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
         <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://ravindranaik.com/wp-content/uploads/2018/08/csharp_api.jpg) center / cover' }}>

           C# Project #1
         </CardTitle>



         <CardText>
           This is where you write all the things your project is supposed to be about
         </CardText>
         <CardActions border>
           <Button colored>Github</Button>
           <Button colored>CodePen</Button>
           <Button colored>Live Demo</Button>
         </CardActions>
         <CardMenu style={{ color: '#fff' }}>
           <IconButton name="share" />
         </CardMenu>
       </Card>

       {/*Project 2 */}

       <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
         <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://ravindranaik.com/wp-content/uploads/2018/08/csharp_api.jpg) center / cover' }}>

         C# Project #2
         </CardTitle>



         <CardText>
           This is where you write all the things your project is supposed to be about
         </CardText>
         <CardActions border>
           <Button colored>Github</Button>
           <Button colored>CodePen</Button>
           <Button colored>Live Demo</Button>
         </CardActions>
         <CardMenu style={{ color: '#fff' }}>
           <IconButton name="share" />
         </CardMenu>
       </Card>
       </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>C#</Tab>
        </Tabs>
          <Grid >
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    );
  }
}

export default Projects;

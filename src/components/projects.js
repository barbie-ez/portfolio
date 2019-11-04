import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
          <Grid style={{ width: "100%", margin: "auto" }}>
            <Cell col={4}>
              <Card shadow={5} style={{ width: "100%", margin: 'auto', zIndex: '0', position: 'relative' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1500/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>

                  Diet tracker Application
          </CardTitle>



                <CardText>
                  A simple React client application used to store, track and update diet information
          </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            {/*Project 2 */}
            <Cell col={4}>
              <Card shadow={5} style={{ width: "100%", margin: 'auto', zIndex: '0', position: 'relative' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1500/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>

                  Ecommerce Client Application
          </CardTitle>



                <CardText>
                  A web application which interfaces with the C# backend to perform shopping tasks
          </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            {/*Project 3 */}
            <Cell col={4}>
              <Card shadow={5} style={{ width: "100%", margin: 'auto', zIndex: '0', position: 'relative' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1500/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>
                  Maintenance Management application
          </CardTitle>



                <CardText>
                  This is used by Maintenance staff to keep track of all repairs and repair request in a company
          </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Grid>
            {/*Project 1 */}
            <Cell col={6}>
              <Card shadow={5} style={{ width: "100%", margin: 'auto', zIndex: '0', position: 'relative' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://stackify.com/wp-content/uploads/2019/02/C-Garbage-Collection-Tutorial-881x441.jpg) center / cover' }}>

                  Diet Tracker Api
         </CardTitle>



                <CardText>
                  An ASP .net core web API which feeds in information to the diet tracker client
         </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            {/*Project 2 */}
            <Cell col={6}>
              <Card shadow={5} style={{ width: "100%", margin: 'auto', zIndex: '0', position: 'relative' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://stackify.com/wp-content/uploads/2019/02/C-Garbage-Collection-Tutorial-881x441.jpg) center / cover' }}>

                  E-Commerce API
         </CardTitle>



                <CardText>
                  An ASP .net core web API which feeds in information to the  E-Commerce client
         </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            {/*Project 3 */}

          </Grid>

        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs" id="projects">
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

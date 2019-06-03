import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

const PROJECTS = [
  {
    id: 1,
    title: "Simple React App #1",
    description: "React Router libary and fetch api"
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  handleClick() {
    console.log("Project 1 button has been clicked");
    // window.location.href = "https://github.com/s028041/React-Router";
    window.open("https://github.com/s028041/React-Router", "_blank");
  }
  handleClick2() {
    console.log("Project 2 button has been clicked");
    // window.location.href = "https://github.com/s028041/React-Router";
    window.open("https://github.com/s028041/MyPortfolio", "_blank");
  }

  renderProject = ({ id, description }) => <p key={id}>{description}</p>;

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              Simple React project
              {/* {PROJECTS.map(this.renderProject)} */}
            </CardTitle>
            <CardText>{PROJECTS.map(this.renderProject)}</CardText>
            <CardActions border>
              <Button onClick={this.handleClick} colored>
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              My portfolio
            </CardTitle>
            <CardText>Web app of my resume</CardText>
            <CardActions border>
              <Button onClick={this.handleClick2} colored>
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;

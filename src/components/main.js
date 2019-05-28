import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Projects from "./projects";
import Resume from "./resume";
import ContactMe from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={ContactMe} />
  </Switch>
);

export default Main;

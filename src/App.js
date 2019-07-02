import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              myPortfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Header>
        <Drawer title="myPortfolio" className="mdl-layout--small-screen-only">
          <Navigation>
            <Link to="/resume" onClick={() => this.hideToggle()}>
              Resume
            </Link>
            <Link to="/projects" onClick={() => this.hideToggle()}>
              Projects
            </Link>
            <a href="/" onClick={() => this.toggleDrawer()}>
              Landing Page
            </a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

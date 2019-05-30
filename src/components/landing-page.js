import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Avatar from "../assets/domde.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Avatar} alt="Avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Junior Front-End Developer</h1>

              <hr />
              <p>HTML/CSS | JavaScript | React | NodeJS | VueJS |</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/dominykas-kugelevi%C4%8Dius-674223153/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/s028041"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;

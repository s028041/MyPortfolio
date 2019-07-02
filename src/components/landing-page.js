import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Avatar from "../assets/avatar.png";

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
              {/* <p>HTML/CSS | JavaScript | React | NodeJS | VueJS |</p> */}
              <p style={{ textAlign: "justify" }}>
                Hello my names is Dominykas, I am 22 years old. I am passionate
                about technology - not a specific framework or language. In this
                line of work it is about adaptation, and what works best for the
                project. I am open to learning any stack if it works. Please
                find my resume, so that you can see more of the projects I
                worked on as well as previous experience.
              </p>
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

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skill from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="http://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Dominykas Kugelevicius</h2>
            <h4 stlye={{ color: "gray" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>Text about my</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>+37066246564</p>
            <h5>E-mail</h5>
            <p>kugelevicius@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2015}
              endYear={2019}
              schoolName={"Vilniaus Kolegija University of Applied Sience"}
              schoolDescription={"blbalblalal"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2019}
              jobName={"First Internship"}
              jobDescription={".NET dev"}
            />
            <Experience
              startYear={2016}
              endYear={2019}
              jobName={"Second Internship"}
              jobDescription={"Android developer Java"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>

            <Skill
              skill={"React"}
              skill1={"HTML/CSS"}
              skill2={"JavaScript"}
              skill3={"NodeJS"}
              skill4={"Mapping"}
              skill5={"SomeSkills"}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skill from "./skills";
import Avatar from "../assets/avatar.png";

const SKILLS = [
  {
    id: 1,
    skill: "HTML/CSS"
  },
  {
    id: 2,
    skill: "JavaScript"
  },
  {
    id: 3,
    skill: "React"
  },
  {
    id: 4,
    skill: "NodeJS"
  },
  {
    id: 5,
    skill: "Git"
  }
];

class Resume extends Component {
  renderSkills = ({ id, skill }) => <li key={id}>{skill}</li>;
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={Avatar} alt="avatar" style={{ height: "250px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Dominykas Kugelevičius</h2>
            <h4 stlye={{ color: "gray" }}>Junior programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              I am recently graduated, looking to take part in summer internship
              program. I am responsible, highly adaptable to any environment,
              communicative, motivated to work and learn. Looking forward to
              gaining more experience working in IT field as much as I can, get
              to know more about working in team. I would like to improve my web
              development programming skills creating high quality web
              applications. For me this pratice would be very important, because
              it would help to develop my skills and knowledge towards personal
              goals to be achvieved.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>+37066246564</p>
            <h5>E-mail</h5>
            <p>kugeleviciusd@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2015}
              endYear={2019}
              schoolName={
                "Vilniaus Kolegija/University Of Applied Sciences Faculty Of Electronics and Informatics"
              }
              schoolDescription={"Modern Smart Devices"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={"Oct 2017"}
              endYear={"Feb 2018"}
              jobName={"First Internship"}
              jobDescription={
                "Teltonika Internet Of Things Acamedy, .NET programming"
              }
            />
            <Experience
              startYear={"Sep 2018"}
              endYear={"Jan 2019"}
              jobName={"Second Internship"}
              jobDescription={
                "Teltonika Internet Of Things Acamedy, Java programming"
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>

            <Skill
              skill={SKILLS.map(this.renderSkills)}
              // skill1={"HTML/CSS"}
              // skill2={"JavaScript"}
              // skill3={"NodeJS"}
              // skill4={"Android Studio"}
              // skill5={"Git"}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

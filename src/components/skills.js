import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Skill extends Component {
  render() {
    return (
      <Grid>
        <Cell style={{ fontSize: "16px" }} col={4}>
          <li>{this.props.skill}</li>
          <li>{this.props.skill1}</li>
        </Cell>
        <Cell style={{ fontSize: "16px" }} col={4}>
          <li>{this.props.skill2}</li>
          <li>{this.props.skill3}</li>
        </Cell>
        <Cell style={{ fontSize: "16px" }} col={4}>
          <li>{this.props.skill4}</li>
          <li>{this.props.skill5}</li>
        </Cell>
      </Grid>
    );
  }
}
export default Skill;

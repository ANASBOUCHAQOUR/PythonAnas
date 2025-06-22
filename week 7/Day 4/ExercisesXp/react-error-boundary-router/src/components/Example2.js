import React, { Component } from "react";
import data from "../data/complexData.json";

class Example2 extends Component {
  render() {
    const { Frontend, Backend } = data.Skills;
    return (
      <div>
        <h2>Frontend Skills</h2>
        {Frontend.map((skill, index) => <div key={index}>{skill}</div>)}
        <h2>Backend Skills</h2>
        {Backend.map((skill, index) => <div key={index}>{skill}</div>)}
      </div>
    );
  }
}

export default Example2;

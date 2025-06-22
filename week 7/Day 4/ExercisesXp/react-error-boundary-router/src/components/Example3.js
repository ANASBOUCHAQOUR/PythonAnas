import React, { Component } from "react";
import data from "../data/complexData.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <strong>{exp.year}</strong> - {exp.company}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;

import React, { Component } from "react";
import data from "../data/complexData.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Social Media</h2>
        {data.SocialMedias.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    );
  }
}

export default Example1;

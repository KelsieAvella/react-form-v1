import React from "react";
import board from './images/board-stickynotes.jpg'
import "./About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${board})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Lifetrack</h1>
        <p>
        Whether you're a college grad on the job hunt or a highschool grad looking to apply for colleges, Lifetrack is the right fit for you! It doesn't matter where you are in your journey, Lifetrack can help get you there!
        </p>
      </div>
    </div>
  );
}

export default About;
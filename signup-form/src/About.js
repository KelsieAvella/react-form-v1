import React from "react";
import board from './images/board-stickynotes.jpg'
import note from './images/pushpinNote.png'
import paperclip from './images/paperclipNote.png'
import Card from './Card' 




function About() {
    return (
      <div className="about">
        <div className="aboutTop" style={{ backgroundImage: `url(${board})` }}></div>
        <div className="aboutBottom">
          <h1> About Lifetrack</h1>
          <div className="imageContainer">
                  Whether you're a college grad on the job hunt or a high school grad looking to apply for colleges, Lifetrack is the right fit for you! It doesn't matter where you are in your journey, Lifetrack can help get you there!
          </div>
          <h1> How It Works </h1>
          <p>
            Once you've made an account with us and logged in, you have access to a personal dashboard where you can start creating goals and tracking your progress. Each 
          </p>
        </div>
      </div>
    );
  }
  

export default About;


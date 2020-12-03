import React from "react";
import "./Style.css";
import pic from "../img/pic.jpeg";

const About = () => {
  return (
    <div className="content">
      <img className="img" src={pic} alt="profilePhoto" />
      <h1>Aman Sharma</h1>
      <p className="para">
        I am Frontend Developer upskilling the skills to be an Full Stack Dev.
      </p>
    </div>
  );
};
export default About;

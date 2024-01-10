import React from "react";
import "./Education.css";
import Spic from "../../Asset//Spic.jpg";
import Msec from "../../Asset//MSEC.jpg";

function Education() {
  return (
    <section id="education" className="text-black">
      <div className="text-[5rem]  text-white text-center">Education</div>
      <div class="timeline">
        <div class="container left-container">
          <img src={Spic} alt="" />
          <div class="text-box">
            <h2>SPIC NAGAR HIGHER SECONDARY SCHOOL</h2>
            <small>2017-2018</small>
            <p>SSLC: 91%</p>
            <span class="left-container-arrow"></span>
          </div>
        </div>
        <div class="container right-container">
          <img src={Spic} alt="" />
          <div class="text-box">
            <h2>SPIC NAGAR HIGHER SECONDARY SCHOOL </h2>
            <small>2019-2020</small>
            <p>HSC: 84%</p>
            <span class="right-container-arrow"></span>
          </div>
        </div>
        <div class="container left-container">
          <img src={Msec} alt="" />
          <div class="text-box">
            <h2>MEENAKSHI SUNDARARAJAN ENGINEERING COLLEGE</h2>
            <small>2020-2024</small>
            <p>
              B-Tech Information Technology <br /> CGPA: 8.08
            </p>
            <span class="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

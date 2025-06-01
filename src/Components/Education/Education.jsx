import React, { useEffect, useRef, useState } from "react";
import "./Education.css";
import Spic from "../../Asset/Spic.jpg";
import Msec from "../../Asset/MSEC.jpg";

const TimelineEntry = ({ side, image, title, year, description }) => (
  <div className={`container ${side}-container`}>
    <img src={image} alt={`${title} Logo`} />
    <div className="text-box">
      <h2>{title}</h2>
      <small>{year}</small>
      <p>{description}</p>
      <span className={`${side}-container-arrow`}></span>
    </div>
  </div>
);

function Education() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`education-section text-black p-[50px] ${
        isVisible ? "animate" : ""
      }`}
    >
      <div className="timeline">
        <TimelineEntry
          side="left"
          image={Spic}
          title="SPIC NAGAR HIGHER SECONDARY SCHOOL"
          year="2017-2018"
          description="SSLC: 91%"
        />
        <TimelineEntry
          side="right"
          image={Spic}
          title="SPIC NAGAR HIGHER SECONDARY SCHOOL"
          year="2019-2020"
          description="HSC: 84%"
        />
        <TimelineEntry
          side="left"
          image={Msec}
          title="MEENAKSHI SUNDARARAJAN ENGINEERING COLLEGE"
          year="2020-2024"
          description={
            <>
              B-Tech Information Technology <br /> CGPA: 8.08
            </>
          }
        />
      </div>
    </section>
  );
}

export default Education;

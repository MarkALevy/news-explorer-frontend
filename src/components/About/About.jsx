import React from "react";
import "./About.css";
import Avatar from "../../assets/about.jpg";
function About() {
  return (
    <section className="about">
      <img src={Avatar} alt="Author image" className="about__img" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          A highly motivated Full Stack Developer with a BSc in Applied
          Mathematics and an MBA specializing in Information Systems.
        </p>
        <p className="about__description">
          {" "}
          My 14 years of experience as an Intelligence Officer in the IDF honed
          my analytical and problem-solving abilities, enabling me to tackle
          complex challenges with a strategic approach. I'm adept at leading
          teams, managing multiple projects, and delivering results under tight
          deadlines.
        </p>
        <p className="about__description">
          I'm proficient in building robust and scalable web applications using
          modern technologies, with a strong foundation in MERN. I'm passionate
          about crafting user-centric solutions and continuously seeking
          opportunities to learn and grow.
        </p>
      </div>
    </section>
  );
}

export default About;

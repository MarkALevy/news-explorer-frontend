import "./About.css";
import Avatar from "../../assets/About.jpg";
function About() {
  return (
    <div className="about">
      <img src={Avatar} alt="Author image" className="about__img" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. <br />
          <br />
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;

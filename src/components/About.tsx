import "./styles/About.css";
import { GITHUB_URL } from "../constants/contact";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am Maaz Shami, a Full Stack AI Developer who turns manual business
          processes into intelligent, automated systems. I engineer dependable
          backends with Python and FastAPI, design clean PostgreSQL data
          architectures, and build AI voice agents and e-commerce automations
          that keep operations running without manual effort.
        </p>
        <p className="para">
          Every project begins with clarity and ends with craft. Explore my work
          on{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            GitHub
          </a>{" "}
          and let's build something exceptional.
        </p>
      </div>
    </div>
  );
};

export default About;
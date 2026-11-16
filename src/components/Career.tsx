import { MdKeyboardArrowDown } from "react-icons/md";
import { smoother } from "./Navbar";
import "./styles/Career.css";

const scrollToReviews = (e: React.MouseEvent) => {
  e.preventDefault();
  if (window.innerWidth > 1024 && smoother) {
    smoother.scrollTo("#reviews", true, "top top");
  } else {
    document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
  }
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Full Stack · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on automation projects for over a year, delivering Shopify,
              Etsy, and AI voice agent solutions, from first workflow to
              production.
            </p>
              
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Industry Experience</h4>
                <h5>Frontend &  Full Stack AI Developer </h5>
              </div>
              <h3>3 YRS</h3>
            </div>
            <p>
              Spent three years across companies building responsive UIs, REST APIs,
              and PostgreSQL-backed applications & Ai automation as a Frontend and  Full Stack AI Developer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Information Technology</h4>
                <h5>University of Management Technology</h5>
              </div>
              <h3>2022–2026</h3>
            </div>
            <p>
              I completed my B.S. in Information Technology at UMT
              (2022–2026) — the foundation for everything I build today.
            </p>
          </div>
        </div>
        <p className="career-reviews-cta">
          You can check client reviews below — real feedback from people I have
          worked with as a freelancer and in industry.
        </p>
        <button
          type="button"
          className="career-reviews-arrow"
          onClick={scrollToReviews}
          aria-label="Scroll to client reviews"
          data-cursor="disable"
        >
          <MdKeyboardArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Career;

import "./styles/Career.css";

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

          {/* 2024 - MERN Stack Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Intern</h4>
                <h5>Main Flow Services & Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>

            <p>
              Developed full-stack web applications using MongoDB, Express.js,
              React.js, and Node.js. Built REST APIs and optimized backend
              services while designing reusable React components.
            </p>
          </div>

          {/* 2025 - DRDO Research Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>INMAS, DRDO</h5>
              </div>
              <h3>2025</h3>
            </div>

            <p>
              Conducted biochemical research experiments and analyzed laboratory
              data using analytical instruments like LC-MS, NMR, and UV-Vis.
              Documented experimental results and contributed to technical
              research reports.
            </p>
          </div>

          {/* NOW - Growth & Operations Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Growth & Operations Intern</h4>
                <h5>Ensaathi Partners Pvt Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Analyzing operational workflows and building KPI dashboards to
              track business performance. Supporting data-driven decision making
              through process analysis and operational insights.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
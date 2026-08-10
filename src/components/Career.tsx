import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          THE FOUNDATION
        </h2>
        <p className="career-subtitle">
          From computer science fundamentals to intelligent systems.
        </p>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-active-dot"></div>
          </div>
          
          <div className="career-info-box entry-1">
            <div className="career-info-in">
              <div className="career-role">
                <h4 className="career-degree">B.E. — Computer Science Engineering</h4>
                <h5 className="career-institution">Maharaja Institute of Technology Mysore</h5>
              </div>
              <h3 className="career-dates">2023 — 2027</h3>
            </div>
            <p className="career-description">
              Artificial Intelligence & Machine Learning
            </p>
          </div>

          <div className="career-info-box entry-2">
            <div className="career-info-in">
              <div className="career-role">
                <h4 className="career-degree">PRE-UNIVERSITY EDUCATION</h4>
                <h5 className="career-institution">Sadvidya Composite PU College</h5>
              </div>
              <h3 className="career-dates">2021 — 2023</h3>
            </div>
            <p className="career-description">
              Karnataka State Board • 90%
            </p>
          </div>

          <div className="career-info-box entry-3">
            <div className="career-info-in">
              <div className="career-role">
                <h4 className="career-degree">HIGH SCHOOL EDUCATION</h4>
                <h5 className="career-institution">Shree Mahaveer Jain Vidyalaya</h5>
              </div>
              <h3 className="career-dates">2020 — 2021</h3>
            </div>
            <p className="career-description">
              ICSE • 80%
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;

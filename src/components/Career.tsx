import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E, COMPUTER SCIENCE ENGINEERING -AI&ML</h4>
                <h5>MAHARAJA INSTITUTE OF TECHNOLOGY MYSORE, INDIA</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Bachelor of Engineering in Artificial Intelligence and Machine Learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12TH GRADE</h4>
                <h5>SADVIDYA COLLEGE MYSORE, INDIA</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Karnataka State Board - 90%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10TH GRADE</h4>
                <h5>SHREE MAHAVEER JAIN VIDYALAYA MYSORE, INDIA</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              ICSE - 80%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

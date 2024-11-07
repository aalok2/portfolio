import React from "react";
// import CV from "../../assets/RESUME.pdf";

const CTA = () => {
  const handleDownloadClick = () => {
    // Replace the URL with the actual link to your PDF
    const cvUrl = "https://drive.google.com/file/d/1GKUt3rBFVIiO2aQ4HMnffqvbj4MQRDNL/view?usp=drive_link"
    // Open the CV link in a new tab
    window.open(cvUrl, '_blank');
  };

  return (
    <div className="cta">
      <a href="#about" className="btn" onClick={handleDownloadClick}>
        View Resume
      </a>
      <a href="#footer" className="btn btn-primary">
        Contact Info
      </a>
    </div>
  );
};

export default CTA;

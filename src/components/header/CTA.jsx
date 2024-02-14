import React from "react";
// import CV from "../../assets/RESUME.pdf";

const CTA = () => {
  const handleDownloadClick = () => {
    // Replace the URL with the actual link to your PDF
    const cvUrl = "https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/EfWBmIsqL1FJll5OFcdKCRkBLalnDMG4ULaTKR5e869XBg?e=4XBlg4"
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

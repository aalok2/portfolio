import React from "react";
// import CV from "../../assets/RESUME.pdf";

const CTA = () => {
  const handleDownloadClick = () => {
    // Replace the URL with the actual link to your PDF
    const cvUrl = "https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/EbEdlAdyNQlIvdA2nQvOIbgB9sk0QmXpuNrUj4E2ElkiIg?e=CneCIV";
    //https://drive.google.com/file/d/1DlS2-X8CNhMS8AmxaICkL-Ujl_6ufj5-/view
    // https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/EbEdlAdyNQlIvdA2nQvOIbgB9sk0QmXpuNrUj4E2ElkiIg?e=CneCIV
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

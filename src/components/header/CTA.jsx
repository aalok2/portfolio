import React from "react";
// import CV from "../../assets/RESUME.pdf";

const CTA = () => {
  const handleDownloadClick = () => {
    // Replace the URL with the actual link to your PDF
    const cvUrl = "https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/EQXq8wucqEtElk-2mfz3lQQBSVmhRII1037L_Hwn6fK8Tw?e=W5bCKH";
    //https://drive.google.com/file/d/1DlS2-X8CNhMS8AmxaICkL-Ujl_6ufj5-/view
    // https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/EQXq8wucqEtElk-2mfz3lQQBSVmhRII1037L_Hwn6fK8Tw?e=W5bCKH
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

import React from "react";
// import CV from "../../assets/RESUME.pdf";

const CTA = () => {
  const handleDownloadClick = () => {
    // Replace the URL with the actual link to your PDF
    const cvUrl = "https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/ESsh_enOpqRApMzOtbBNR2gBBgQ5KzYQkCLXhjtdcTwaew?e=sOQzbD"
    //"https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/EbLOmlOaJzZAvj4mzimK0vUBZ8MmhmU9hjgr2Akcbeuh6A?e=R4snmm";
    //https://drive.google.com/file/d/1DlS2-X8CNhMS8AmxaICkL-Ujl_6ufj5-/view
    // https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/EQ1G8kUk6ipIs8vWZYAt6xoBc8nW3RR-sxU6ytv5g-efiQ?e=7mn5v5
    // https://uflorida-my.sharepoint.com/:b:/g/personal/d_naraharisetti_ufl_edu/EbLOmlOaJzZAvj4mzimK0vUBZ8MmhmU9hjgr2Akcbeuh6A?e=R4snmm
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

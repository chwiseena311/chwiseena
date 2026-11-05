import resumePdf from "../assets/resume.pdf";
import "./resume.scss";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-note">
        Note - this resume was last updated on November 5th, 2026. Please
        contact Chris for a more updated version.
      </div>
      <object data={resumePdf} type="application/pdf" className="resume">
        Your browser does not support pdfs,{" "}
        <a href={resumePdf}>click here to download the file.</a>
      </object>
    </div>
  );
}

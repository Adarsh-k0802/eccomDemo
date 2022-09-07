import React from "react";
import SubjectCard from "./SubjectCard";
import marketing from "../../assets/Subject/marketing.svg";
import engineering from "../../assets/Subject/engineering.svg";
import law from "../../assets/Subject/law.svg";
import management from "../../assets/Subject/management.svg";
import science from "../../assets/Subject/science.svg";
import acounting from "../../assets/Subject/acounting.svg";
import subject from "../../assets/Subject/Subjects.svg";
import "./subject.css";
const Subject = () => {
  return (
    <div className="subjects">
      <div className="subjects-heading--container">
        <h1 className="subjects-heading--text">Subjects</h1>
        <img src={subject} className="subjects-heading--background" alt="" />
      </div>
      <div className="infinite-autoslider">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <SubjectCard source={marketing} firstText="Marketing" />
            </div>
            <div class="slide">
              <SubjectCard source={engineering} firstText="Engineering" />
            </div>
            <div class="slide">
              <SubjectCard source={law} firstText="Law" />
            </div>
            <div class="slide">
              <SubjectCard source={management} firstText="Management" />
            </div>
            <div class="slide">
              <SubjectCard source={science} firstText="Science" />
            </div>
            <div class="slide">
              <SubjectCard source={acounting} firstText="Accounting" />
            </div>
            <div class="slide">
              <SubjectCard source={marketing} firstText="Marketing" />
            </div>
            <div class="slide">
              <SubjectCard source={engineering} firstText="Engineering" />
            </div>
            <div class="slide">
              <SubjectCard source={marketing} firstText="Marketing" />
            </div>
            <div class="slide">
              <SubjectCard source={engineering} firstText="Engineering" />
            </div>
            <div class="slide">
              <SubjectCard source={acounting} firstText="Accounting" />
            </div>
            <div class="slide">
              <SubjectCard source={marketing} firstText="Maths" />
            </div>
            <div class="slide">
              <SubjectCard source={law} firstText="Economics" />
            </div>
            <div class="slide">
              <SubjectCard source={science} firstText="Science" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;

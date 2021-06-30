import React from "react";
import PracticalExperienceForm from "./PracticalExperienceForm";
import EducationalInformationForm from "./EducationalInformationForm";
import AddExperienceButton from "./AddExperienceButton";
import AddEducationButton from "./AddEducationButton";

const ExpAndEducFormularies = (props) => {
  const experiences = props.experiences;
  const educations = props.educations;
  const delExp = props.onDeleteExperience;
  const delEduc = props.onDeleteEducation;
  const addExperience = props.onAddExperience;
  const addEducation = props.onAddEducation;
  const formulary = props.formulary;
  const display = props.display;

  return (
    <div>
      <h2>Professional Experience</h2>
      <div className="separator"></div>
      <ul>
        {experiences.map((num) => {
          return (
            <li>
              <PracticalExperienceForm
                num={num}
                delExp={delExp}
                formulary={formulary}
                display={display}
              />
            </li>
          );
        })}
      </ul>
      <AddExperienceButton formulary={formulary} addExperience={addExperience} />
      <h2>Education</h2>
      <div className="separator"></div>
      <ul>
        {educations.map((num) => {
          return (
            <li>
              <EducationalInformationForm
                num={num}
                delEduc={delEduc}
                formulary={formulary}
                display={display}
              />
            </li>
          );
        })}
      </ul>
      <AddEducationButton formulary={formulary} addEducation={addEducation} />
    </div>
  );
};

export default ExpAndEducFormularies;

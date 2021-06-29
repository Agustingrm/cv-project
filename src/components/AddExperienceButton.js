import React from "react";

const AddExperienceButton = (props) => {
  const formulary = props.formulary;
  const addExperience = props.addExperience;
  if (formulary) {
    return <button onClick={addExperience} className='addButton'>Add Experience</button>;
  } else return null;
};

export default AddExperienceButton;

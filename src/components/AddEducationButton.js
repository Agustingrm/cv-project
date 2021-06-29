import React from "react";

const AddEducationButton = (props) => {
  const formulary = props.formulary;
  const addEducation = props.addEducation;
  if (formulary) {
    return <button onClick={addEducation} className='addButton'>Add Education</button>;
  } else return null;
};

export default AddEducationButton;

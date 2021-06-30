import React, { useState } from "react";

const EducationalInformationForm = (props) => {
  const delEduc = props.delEduc;
  const num = props.num;
  const formulary = props.formulary;
  const display = props.display;

  const [form, setForm] = useState({
    school: "",
    title: "",
    fromDateEd: "",
    toDateEd: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  if (formulary) {
    return (
      <div>
        <div>
          <label className="educationLabel">School Name:</label>
          <input type="text" name={"school"} onChange={handleChange} />
          <label className="educationLabel">Degree:</label>
          <input type="text" name={"title"} onChange={handleChange} />
        </div>
        <div>
          <label className="educationLabel">From:</label>
          <input type="date" name={"fromDateEd"} onChange={handleChange} />
          <label className="educationLabel">To:</label>
          <input type="date" name={"toDateEd"} onChange={handleChange} />
        </div>
        <button
          onClick={() => {
            delEduc(num);
          }}
          className="deleteButton"
        >
          Delete
        </button>
      </div>
    );
  }
  if (display) {
    return (
      <div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">School Name:</p>
          <p>{form.school}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">Title Obtained:</p>
          <p>{form.title}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">From:</p>
          <p>{form.fromDateEd}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">To:</p>
          <p>{form.toDateEd}</p>
        </div>
      </div>
    );
  }
};

export default EducationalInformationForm;

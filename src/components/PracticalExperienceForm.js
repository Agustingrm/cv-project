import React, { useState } from "react";

const PracticalExperienceForm = (props) => {
  const delExp = props.delExp;
  const num = props.num;
  const formulary = props.formulary;
  const display = props.display;

  const [form, setForm] = useState({
    company: "",
    position: "",
    task: "",
    fromDateExp: "",
    toDateExp: "",
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
          <label>Company Name:</label>
          <input type="text" name={"company"} onChange={handleChange} />
          <label>Position:</label>
          <input type="text" name={"position"} onChange={handleChange} />
        </div>
        <div>
          <label>Main Tasks:</label>
          <input
            type="text"
            name={"task"}
            onChange={handleChange}
            className="mainTasks"
          />
        </div>
        <div>
          <label>From:</label>
          <input type="date" name={"fromDateExp"} onChange={handleChange} />
          <label>To:</label>
          <input type="date" name={"toDateExp"} onChange={handleChange} />
        </div>
        <button
          onClick={() => {
            delExp(num);
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
          <p className="boldParagraphsInPreview">Company:</p>
          <p>{form.company}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">Position:</p>
          <p>{form.position}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">Main Tasks:</p>
          <p className='mainTaskDescription'>{form.task}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">From:</p>
          <p>{form.fromDateExp}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">To:</p>
          <p>{form.toDateExp}</p>
        </div>
      </div>
    );
  }
};

export default PracticalExperienceForm;

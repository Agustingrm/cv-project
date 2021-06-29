import React, { useState } from "react";

const PersonalInformation = (props) => {
  const formulary = props.formulary;
  const display = props.display;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  if (formulary) {
    return (
      <div>
        <h2>Personal Information</h2>
        <div className="separator"></div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label>Phone Number:</label>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
  if (display) {
    return (
      <div>
        <h2>Personal Information</h2>
        <div className="separator"></div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">First Name: </p>
          <p>{form.firstName}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">Last Name:</p>
          <p>{form.lastName}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">Email:</p>
          <p>{form.email}</p>
        </div>
        <div className="arrangeParagraphsAndDescription">
          <p className="boldParagraphsInPreview">Telephone Number:</p>
          <p>{form.phone}</p>
        </div>
      </div>
    );
  }
};

export default PersonalInformation;

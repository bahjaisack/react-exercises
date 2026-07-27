import React, { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isChecked: false,
    selectedOption: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form:", formData);
  };

  return (
    <div>
      <h2>Form Handling</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={formData.isChecked}
            onChange={handleChange}
          />
          Check box
        </label>

        <select
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleChange}
        >
          <option value="">Select option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandling;
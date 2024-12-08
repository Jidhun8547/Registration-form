import React, { useState } from "react";
import './App.css';


function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    qualification: "",
    skills: []
  });

  const skillsOptions = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const updatedSkills = checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill) => skill !== value);
        return { ...prevData, skills: updatedSkills };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!" );
  };

  const handleReset = () => {
    setFormData({
      name: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      qualification: "",
      skills: []
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>

        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Qualification:
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="">--Select--</option>
              <option value="High School">High School</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
          </label>
        </div>

        <div>
          <label>Skills:</label>
          {skillsOptions.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                name="skills"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleChange}
              />
              {skill}
            </label>
          ))}
        </div>

        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset} style={{ marginLeft: "10px" }}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

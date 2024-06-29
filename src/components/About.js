import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const About = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Initialize form data state
    username: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
    // Handle form submission logic here, e.g., submit data to backend

    // Example: Logging form data to console
    // console.log(formData);


  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <><Navbar></Navbar>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form></>
  );
};

export default About;

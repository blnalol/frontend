import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    gender: '',
    dob: '',
    appointment: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Redirect to RegisterStepTwo for photo upload
    navigate('/registerStepTwo');
  };

  return (
    <div className="register-container">
      <h2>Enter Details</h2>
      <form onSubmit={handleNext}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="input-text"
            id="fullName"
            name="fullName"
            type="text"
            value={user.fullName}
            onChange={handleInputChange}
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="input-text"
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="input-text"
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            className="input-text"
            id="mobileNumber"
            name="mobileNumber"
            type="text"
            value={user.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            className="input-text"
            id="dob"
            name="dob"
            type="date"
            value={user.dob}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointment">Appointment</label>
          <input
            className="input-text"
            id="appointment"
            name="appointment"
            type="text"
            value={user.appointment}
            onChange={handleInputChange}
            placeholder="Enter appointment"
            required
          />
        </div>
        <button type="submit" className="btn-primary">Next</button>
      </form>
    </div>
  );
}

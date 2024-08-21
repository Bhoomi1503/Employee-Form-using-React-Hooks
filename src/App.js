import React, { useState } from 'react';
import './App.css';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    team: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.dob) newErrors.dob = 'Date is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.startTime) newErrors.startTime = 'Start Time is required';
    if (!formData.endTime) newErrors.endTime = 'End Time is required';
    if (!formData.jobPosition) newErrors.jobPosition = 'Job Position is required';
    if (!formData.team) newErrors.team = 'Team is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.billableHours || isNaN(formData.billableHours) || Number(formData.billableHours) <= 0)
      newErrors.billableHours = 'Billable Hours is required and must be a positive number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Employee Form</h2>
      <div className="form-row">
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error-text">{errors.firstName}</p>}
      </div>
      <div className="form-group">
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
      </div>
      </div>
      <div className="form-row">
      <div className="form-group">
        <label>Birth Date</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <p className="error-text">{errors.dob}</p>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}
      </div>
      </div>
      <div className="form-row">
      <div className="form-group">
        <label>Select Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Choose Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="error-text">{errors.gender}</p>}
      </div>
      <div className="form-group">
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
        />
        {errors.startTime && <p className="error-text">{errors.startTime}</p>}
      </div>
      <div className="form-group">
        <label>End Time</label>
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
        />
        {errors.endTime && <p className="error-text">{errors.endTime}</p>}
      </div>
      </div>
      <div className="form-row">
      <div className="form-group">
        <label>Job Position</label>
        <input
          type="text"
          name="jobPosition"
          value={formData.jobPosition}
          onChange={handleChange}
        />
        {errors.jobPosition && <p className="error-text">{errors.jobPosition}</p>}
      </div>
      <div className="form-group">
        <label>Select Teams</label>
        <select name="team" value={formData.team} onChange={handleChange}>
          <option value="">Select</option>
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
        </select>
        {errors.team && <p className="error-text">{errors.team}</p>}
      </div>
      <div className="form-group">
        <label>Select Designation</label>
        <select
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="designation1">Designation 1</option>
          <option value="designation2">Designation 2</option>
        </select>
        {errors.designation && <p className="error-text">{errors.designation}</p>}
      </div>
      </div>
      <div className="form-row">
      <div className="form-group">
        <label>Billable Hours</label>
        <input
          type="number"
          name="billableHours"
          value={formData.billableHours}
          onChange={handleChange}
        />
        {errors.billableHours && (
          <p className="error-text">{errors.billableHours}</p>
        )}
      </div>
      <div className="form-group">
        <label>
          Is Billable
          <input
            type="checkbox"
            name="isBillable"
            checked={formData.isBillable}
            onChange={handleChange}
          />
        </label>
      </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;


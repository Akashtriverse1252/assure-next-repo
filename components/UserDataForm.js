import React, { useState } from 'react';

const UserDataForm = ({ onPrevStep, onNextStep, onFormData }) => {
  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    dob: '',
    gender: '',
  });

  const handlePrev = () => {
    // Handle any other actions if needed
    onPrevStep();
  };

  const handleNext = () => {
    // Handle form validation or other actions if needed
    // For simplicity, directly moving to the next step
    onNextStep();
    // Pass the collected user data to the parent component
    onFormData({ userData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Data Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="dob" value={userData.dob} onChange={handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={userData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </form>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default UserDataForm;

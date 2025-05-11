import React from 'react';
import '../styling/Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>MY PROFILE</h1>

        <label>NAME</label>
        <input type="text" placeholder="Enter name here" />

        <label>ENTER DOB</label>
        <input type="text" placeholder="DD/MM/YYYY" />

        <label>IDENTIITY</label>
        <div className="gender-options">
          <div className="gender-box">FEMALE</div>
          <div className="gender-box">MALE</div>
        </div>

        <label>EMAIL ADDRESS</label>
        <input type="email" placeholder="Enter email" />

        <button className="save-button">SAVE</button>
      </div>
    </div>
  );
}

export default Profile;

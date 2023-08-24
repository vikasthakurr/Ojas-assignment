import React from 'react';
import './UserProfile.css';
import profilePic from '../component/removed dp.png';

const UserProfile = () => {
  const user = {
    name: 'Vikas kumar',
    username: '@vikaskumar',
    bio: 'web developer', 
  };

  return (
    <div className="user-profile">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h2>{user.name}</h2>
      <p className="username">{user.username}</p>
      <p className="bio">{user.bio}</p>
      <button className="edit-profile-button">Edit Profile</button>
    </div>
  );
};

export default UserProfile;

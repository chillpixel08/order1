import React from 'react';

const ChangePassword = () => {
  return (
    <div>
      <h2>Change Password</h2>
      <input type="password" placeholder="Old Password" />
      <input type="password" placeholder="New Password" />
      <button>Update Password</button>
    </div>
  );
};

export default ChangePassword;

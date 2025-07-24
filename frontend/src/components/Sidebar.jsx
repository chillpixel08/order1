import React from 'react';

const Sidebar = ({ setActivePage }) => {
  return (
    <div style={{ width: '200px', background: '#eff7e9', padding: '20px' }}>
      <p style={{ fontWeight: 'bold', color: 'green' }} onClick={() => setActivePage('ViewOrders')}>View Orders</p>
      <p onClick={() => setActivePage('PersonalDetails')}>Personal Details</p>
      <p onClick={() => setActivePage('ChangePassword')}>Change Password</p>
      <p style={{ color: 'teal' }} onClick={() => setActivePage('PaymentMethods')}>Payment Methods</p>
      <p onClick={() => setActivePage('ManageAddresses')}>Manage Addresses</p>
      <p onClick={() => setActivePage('SocialAccounts')}>Social Accounts</p>
      <p onClick={() => window.location.href = '/login'}>Log Out</p>
    </div>
  );
};

export default Sidebar;

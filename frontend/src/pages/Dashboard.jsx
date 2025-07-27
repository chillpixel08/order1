import React, { useState } from 'react';
import ViewOrders from './ViewOrders';
import PersonalDetails from './Profile';
import PaymentMethods from './PaymentMethods';
import './Dashboard.css'; // custom styles

const Dashboard = () => {
  const [activePage, setActivePage] = useState('ViewOrders');

  const renderContent = () => {
    switch (activePage) {
      case 'ViewOrders':
        return <ViewOrders />;
      case 'PersonalDetails':
        return <PersonalDetails />;
      
      case 'PaymentMethods':
        return <PaymentMethods />;
     
      
        return <ViewOrders />;
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">🛒 ShopCart</div>
        <nav className="dashboard-nav">
          <button
            className={activePage === 'ViewOrders' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActivePage('ViewOrders')}
          >
            View Orders
          </button>
          <button
            className={activePage === 'PersonalDetails' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActivePage('PersonalDetails')}
          >
            Profile
          </button>
          
          <button
            className={activePage === 'PaymentMethods' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActivePage('PaymentMethods')}
          >
            Payments
          </button>
          
          
        </nav>
      </header>

      <main className="dashboard-main">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;

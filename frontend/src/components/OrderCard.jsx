import React from 'react';
import './OrderCard.css';

const OrderCard = () => {
  return (
    <div className="order-card">
      <p><strong>Huawei P20 Pro</strong></p>
      <p>Quantity: 1</p>
      <p>Price: ₹28,000</p>
      <p>Order Date: 2025-07-22</p>
      <div className="order-actions">
        <button>View Order Details</button>
        <button>Get Invoice</button>
        <button>Edit Order</button>
      </div>
    </div>
  );
};

export default OrderCard;

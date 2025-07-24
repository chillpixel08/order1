import React, { useEffect, useState } from 'react';
import { fetchOrders, downloadInvoice } from '../api';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  const userId = 'replace_with_valid_user_id';

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await fetchOrders(userId);
      setOrders(data);
    };
    getOrders();
  }, [userId]);

  const handleDownload = async (orderId) => {
    const response = await downloadInvoice(orderId);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'invoice.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {orders.map(order => (
        <div key={order._id} className="order-card">
          <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>{item.name} - ₹{item.price} x {item.quantity}</li>
            ))}
          </ul>
          <p><strong>Total:</strong> ₹{order.totalAmount}</p>
          <button onClick={() => handleDownload(order._id)}>Download Invoice</button>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;

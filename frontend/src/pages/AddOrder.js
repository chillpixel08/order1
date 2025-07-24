import React, { useState } from 'react';
import './AddOrder.css';

const AddOrder = () => {
  const [items, setItems] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Pending');
  const [orders, setOrders] = useState([]);

  const handleAddOrder = async (e) => {
    e.preventDefault();

    const newOrder = {
      items: items.split(',').map(item => item.trim()),
      amount: parseFloat(amount),
      status,
    };

    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder),
      });

      if (res.ok) {
        const data = await res.json();
        setOrders([...orders, data.order]);
        setItems('');
        setAmount('');
        setStatus('Pending');
      } else {
        alert('Failed to add order');
      }
    } catch (err) {
      console.error('Add Order Error:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="add-order-container">
      <h2>Add New Order</h2>
      <form className="add-order-form" onSubmit={handleAddOrder}>
        <input
          type="text"
          placeholder="Items (comma separated)"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button type="submit">Add Order</button>
      </form>

      {orders.length > 0 && (
        <div className="order-list">
          <h3>Orders:</h3>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                <strong>Items:</strong> {order.items.join(', ')} | <strong>Amount:</strong> ₹{order.amount} | <strong>Status:</strong> {order.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddOrder;

import React, { useState } from 'react';
import './PaymentMethods.css'; // You’ll define styles here

const demoPayments = [
  {
    id: 1,
    productName: 'Apple AirPods Pro',
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055672.png',
    description: 'Wireless earbuds with noise cancellation',
    amount: '₹18,999',
    date: '2025-07-20',
    method: 'UPI',
    transactionId: 'TXN123456789'
  },
  {
    id: 2,
    productName: 'Nike Air Max',
    image: 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
    description: 'Premium running shoes',
    amount: '₹5,499',
    date: '2025-07-18',
    method: 'Credit Card',
    transactionId: 'TXN987654321'
  },
  {
    id: 3,
    productName: 'Samsung Smart Watch',
    image: 'https://cdn-icons-png.flaticon.com/512/883/883407.png',
    description: 'Fitness smartwatch with AMOLED display',
    amount: '₹11,299',
    date: '2025-07-15',
    method: 'Debit Card',
    transactionId: 'TXN543216789'
  },
  {
    id: 4,
    productName: 'Canon DSLR Camera',
    image: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
    description: 'High-quality digital SLR camera',
    amount: '₹39,999',
    date: '2025-07-10',
    method: 'Net Banking',
    transactionId: 'TXN202412345'
  },
  {
    id: 5,
    productName: 'MacBook Air M2',
    image: 'https://cdn-icons-png.flaticon.com/512/1000/1000983.png',
    description: 'Ultra-fast laptop with Apple silicon',
    amount: '₹94,999',
    date: '2025-07-08',
    method: 'UPI',
    transactionId: 'TXN111222333'
  },
  {
    id: 6,
    productName: 'Bluetooth Speaker',
    image: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
    description: 'Portable bass speaker with Bluetooth 5.0',
    amount: '₹2,499',
    date: '2025-07-06',
    method: 'Wallet',
    transactionId: 'TXN998877665'
  }
];

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <div className="payment-method-container">
      <h2>Payment History</h2>

      <div className="payment-card-grid">
        {demoPayments.map(payment => (
          <div
            key={payment.id}
            className="payment-card"
            onClick={() => setSelectedPayment(payment)}
          >
            <img src={payment.image} alt={payment.productName} />
            <h3>{payment.productName}</h3>
            <p>{payment.description}</p>
            <span className="amount">{payment.amount}</span>
          </div>
        ))}
      </div>

      {selectedPayment && (
        <div className="payment-details">
          <h3>Payment Details</h3>
          <p><strong>Product:</strong> {selectedPayment.productName}</p>
          <p><strong>Description:</strong> {selectedPayment.description}</p>
          <p><strong>Amount:</strong> {selectedPayment.amount}</p>
          <p><strong>Date:</strong> {selectedPayment.date}</p>
          <p><strong>Method:</strong> {selectedPayment.method}</p>
          <p><strong>Transaction ID:</strong> {selectedPayment.transactionId}</p>
          <button onClick={() => setSelectedPayment(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;

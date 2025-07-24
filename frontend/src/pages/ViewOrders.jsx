// src/pages/ViewOrders.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ViewOrders.css";

const sampleOrders = [
  {
    id: "ORD12345",
    date: "2025-07-22",
    items: ["Wireless Mouse", "USB-C Hub", "Laptop Stand"],
    total: "₹2,499",
    status: "Delivered",
  },
  {
    id: "ORD12346",
    date: "2025-07-20",
    items: ["Bluetooth Keyboard"],
    total: "₹1,299",
    status: "Shipped",
  },
  {
    id: "ORD12347",
    date: "2025-07-18",
    items: ["Gaming Headset", "Webcam"],
    total: "₹3,800",
    status: "Out for Delivery",
  },
  {
    id: "ORD12348",
    date: "2025-07-15",
    items: ["Smartphone", "Screen Protector"],
    total: "₹15,499",
    status: "Delivered",
  },
  {
    id: "ORD12349",
    date: "2025-07-10",
    items: ["External Hard Drive", "HDMI Cable"],
    total: "₹4,250",
    status: "Cancelled",
  },
  {
    id: "ORD12350",
    date: "2025-07-08",
    items: ["Power Bank", "Travel Adapter"],
    total: "₹1,999",
    status: "Delivered",
  },
  {
    id: "ORD12351",
    date: "2025-07-05",
    items: ["Fitness Tracker", "Yoga Mat"],
    total: "₹3,299",
    status: "Returned",
  },
];

const ViewOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleDownload = (order) => {
    const invoiceContent = `
      Invoice for Order ID: ${order.id}
      Date: ${order.date}
      Items: ${order.items.join(", ")}
      Total: ${order.total}
      Status: ${order.status}
    `;
    const blob = new Blob([invoiceContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = `${order.id}_invoice.txt`;
    link.href = url;
    link.click();
  };

  return (
    <motion.div
      className="orders-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Your Orders</h2>
      <div className="orders-list">
        {sampleOrders.map((order) => (
          <motion.div
            className="order-card"
            key={order.id}
            whileHover={{ scale: 1.02 }}
          >
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> {order.total}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <div className="order-actions">
              <button onClick={() => setSelectedOrder(order)}>View Details</button>
              <button onClick={() => handleDownload(order)}>Download Invoice</button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <motion.div
            className="modal-content"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Order Details</h3>
            <p><strong>Order ID:</strong> {selectedOrder.id}</p>
            <p><strong>Date:</strong> {selectedOrder.date}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Items:</strong></p>
            <ul>
              {selectedOrder.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p><strong>Total:</strong> {selectedOrder.total}</p>
            <button onClick={() => setSelectedOrder(null)}>Close</button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ViewOrders;

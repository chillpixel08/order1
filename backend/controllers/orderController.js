const Order = require('../models/orderModel');
const generateInvoicePDF = require('../utils/pdfGenerator');

// Fetch all orders for a user
exports.getOrdersByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// Generate and download invoice
exports.downloadInvoice = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    generateInvoicePDF(order, res);
  } catch (error) {
    res.status(500).json({ message: 'Error generating invoice' });
  }
};

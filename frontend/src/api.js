import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchOrders = (userId) => API.get(`/orders/user/${userId}`);
export const downloadInvoice = (orderId) =>
  API.get(`/orders/${orderId}/invoice`, { responseType: 'blob' });

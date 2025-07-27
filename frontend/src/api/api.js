import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/your-route`);
    return res.data;
  } catch (err) {
    console.error("API fetch error:", err);
    throw err;
  }
};

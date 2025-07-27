// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api"; // adjust the path based on your folder structure

const Home = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchData()
      .then(data => {
        setApiData(data);
        console.log(data); // optional debug
      })
      .catch(err => {
        console.error("Error fetching API data:", err);
      });
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
};

export default Home;

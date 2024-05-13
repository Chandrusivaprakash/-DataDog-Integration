import './FetchData.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FetchData() {
  const [metrics, setMetrics] = useState([]);
  console.log(metrics)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.datadoghq.com/api/v1/monitor', {
          headers: {
            'Content-Type': 'application/json',
            'DD-API-KEY': "f6c37bb200f776a452ea7f937c8ca2d7",
          }
        });
        setMetrics(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>DataDog Metrics</h2>
      <ul>
        {metrics.map((metric, index) => (
          <li key={index}>{metric.name}</li>
        ))}
      </ul>
      <Link to="/monitor-created">Create New Monitor</Link>
    </div>
  );
}

export default FetchData;

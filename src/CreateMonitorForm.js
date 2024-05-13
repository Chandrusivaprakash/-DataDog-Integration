import React, { useState } from 'react';
import axios from 'axios';

const CreateMonitorForm = ({ onMonitorCreated }) => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    query: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://api.datadoghq.com/api/v1/monitor',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'DD-API-KEY': process.env.REACT_APP_DATADOG_API_KEY,
            'DD-APPLICATION-KEY': process.env.REACT_APP_DATADOG_APP_KEY,
          },
        }
      );
      onMonitorCreated(response.data); 
    } catch (error) {
      console.error('Error creating monitor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Query:
        <input
          type="text"
          name="query"
          value={formData.query}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Create Monitor</button>
    </form>
  );
};

export default CreateMonitorForm;

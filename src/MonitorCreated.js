import React, { useState } from 'react';
import CreateMonitorForm from './CreateMonitorForm';

const MonitorCreated = () => {
  const [monitors, setMonitors] = useState([]);

  const handleMonitorCreated = (newMonitor) => {
    setMonitors([...monitors, newMonitor]);
  };

  return (
    <div>
      <h1>Monitors</h1>
      <CreateMonitorForm onMonitorCreated={handleMonitorCreated} />
      <table>
        <thead>
          <tr>
            <th>Message</th>
            <th>Name</th>
            <th>Query</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {monitors.map((monitor) => (
            <tr key={monitor.id}>
              <td>{monitor.message}</td>
              <td>{monitor.name}</td>
              <td>{monitor.query}</td>
              <td>{monitor.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonitorCreated;

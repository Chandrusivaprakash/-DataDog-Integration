import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FetchData from './fetchData';
import MonitorCreated from './MonitorCreated';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={FetchData} />
          <Route path="/monitor-created" component={MonitorCreated} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Index from './pages/index.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Index } exact/>
      </Switch>
    </Router>
  );
}

export default App;

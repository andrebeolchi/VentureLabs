import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Index from './pages/index.js'
import Cadastro from './pages/cadastro.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Index }/>
        <Route path="/cadastro" component={ Cadastro }/>
      </Switch>
    </Router>
  );
}

export default App;

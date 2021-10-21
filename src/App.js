import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Index from './pages/index.js'
import Cadastro from './pages/Cadastro.js'
import Clientes from './pages/index.js'
import Cliente from './pages/Cliente.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Clientes }/>
        <Route path="/cadastro" component={ Cadastro }/>
        <Route path="/cliente" component={ Cliente }/>
      </Switch>
    </Router>
  );
}

export default App;

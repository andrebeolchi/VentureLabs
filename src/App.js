import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Index from './pages/index.js'
import Cadastro from './pages/Cadastro.js'
import Clientes from './pages/Clientes.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Index }/>
        <Route path="/cadastro" component={ Cadastro }/>
        <Route path="/clientes" component={ Clientes }/>
      </Switch>
    </Router>
  );
}

export default App;

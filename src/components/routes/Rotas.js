import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Index from '../../pages/index.js'
import Clientes from '../../pages/Clientes.js'
import Cliente from '../../pages/Cliente.js'
import Cadastro from '../../pages/Cadastro.js'

const Rotas = () => {
    return (
        <Switch>
            <Route path="/" exact component={ Index }/>
            <Route path="/clientes/" component={ Clientes }/>
            <Route path="/cliente/:id" component={ Cliente }/>
            <Route path="/cadastro" component={ Cadastro }/>
        </Switch>
    )
}

export default Rotas
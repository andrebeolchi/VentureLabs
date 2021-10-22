import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Index from '../../pages/index.js'
import Cadastro from '../../pages/Cadastro.js'
import Cliente from '../../pages/Cliente.js'

const Rotas = () => {
    return (
        <Switch>
            <Route path="/" exact component={ Index }/>
            <Route path="/cadastro" component={ Cadastro }/>
            <Route path="/cliente/:id" component={ Cliente }/>
        </Switch>
    )
}

export default Rotas
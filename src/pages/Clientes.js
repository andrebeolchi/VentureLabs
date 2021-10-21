import React from 'react'
import SideBar from '../components/sidebar'
import ListaClientes from '../components/lista_clientes'
import {Content} from '../components/global/Styled'

const Clientes = () => {
    return (
        <>
            <Content>
                <SideBar/>
                <ListaClientes/>
            </Content>
        </>
    )
}

export default Clientes

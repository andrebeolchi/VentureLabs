import React from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../components/sidebar'
import Dados from '../components/lista_clientes/Dados'
import {Content} from '../components/global/Styled'

const Cliente = () => {
    const {id} = useParams();

    return (
        <>
            <Content>
                <SideBar/>
                <Dados id={id ? Number.parseInt(id, 10) : null}/>
            </Content>
        </>
    )
}

export default Cliente

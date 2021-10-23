import React, {useState} from 'react'
import SideBar from '../components/sidebar'
import ListaClientes from '../components/lista_clientes'
import {Content} from '../components/global/Styled'
import {BsArrowBarRight} from 'react-icons/bs'
import {OpenIcon} from '../components/sidebar/SideBarElements'

const Clientes = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            <Content>
                <SideBar isOpen={isOpen} toggle={toggle}/>
                <OpenIcon onClick={toggle}>
                    <BsArrowBarRight style={{fontSize:"36px"}}/>
                </OpenIcon>
                <ListaClientes/>
            </Content>
        </>
    )
}

export default Clientes

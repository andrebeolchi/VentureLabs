import React, {useState} from 'react'
import SideBar from '../components/sidebar'
import ListaClientes from '../components/lista_clientes'
import {Content} from '../components/global/Styled'
import {FaBars} from 'react-icons/fa'
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
                    <FaBars style={{fontSize:"24px"}}/>
                </OpenIcon>
                <ListaClientes/>
            </Content>
        </>
    )
}

export default Clientes

import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../components/sidebar'
import Dados from '../components/lista_clientes/Dados'
import {Content} from '../components/global/Styled'
import {FaBars} from 'react-icons/fa'
import {OpenIcon} from '../components/sidebar/SideBarElements'

const Cliente = () => {
    const {id} = useParams();

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
                <Dados id={id ? Number.parseInt(id, 10) : null}/>
            </Content>
        </>
    )
}

export default Cliente

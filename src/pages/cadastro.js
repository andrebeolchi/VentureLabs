import React, {useState} from 'react'
import SideBar from '../components/sidebar'
import {FaBars} from 'react-icons/fa'
import {OpenIcon} from '../components/sidebar/SideBarElements'
import Form from '../components/form'
import {Content} from '../components/global/Styled'

const Index = () => {
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
                <Form/>
            </Content>
        </>
    )
}

export default Index

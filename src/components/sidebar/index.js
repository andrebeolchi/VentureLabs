import React from 'react'
import {FaUsers} from 'react-icons/fa'
import {AiFillHome,} from 'react-icons/ai'
import {ImPlus} from 'react-icons/im'
import {MdClose} from 'react-icons/md'
import { IconContext } from 'react-icons/lib';
import { SideBarContainer,
         SideBarWrapper,
         SideBarLink,
         Links,
         CloseIcon} from './SideBarElements.js'


const SideBar = ({isOpen, toggle}) => {
    return (
        <>
            <IconContext.Provider value={{size: "24px"}}>
                <SideBarContainer isOpen={isOpen}>
                    <CloseIcon onClick={toggle}>
                        <MdClose/>
                    </CloseIcon>
                    <SideBarWrapper>
                        <SideBarLink to="/" onClick={toggle}>
                            <AiFillHome/>
                            <Links>Home</Links> 
                        </SideBarLink>
                        <SideBarLink to="/cadastro" onClick={toggle}>
                            <ImPlus/>
                            <Links>Cadastro</Links> 
                        </SideBarLink>
                        <SideBarLink to="/clientes" onClick={toggle}>
                            <FaUsers/>
                            <Links>Clientes</Links> 
                        </SideBarLink>
                    </SideBarWrapper>
                </SideBarContainer>
            </IconContext.Provider>
        </>
    )
}

export default SideBar

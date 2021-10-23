import React from 'react'
import {FaPlusSquare, FaUsers, FaHome} from 'react-icons/fa'
import {AiFillHome, AiFillPlusSquare} from 'react-icons/ai'
import {ImPlus} from 'react-icons/im'
import { IconContext } from 'react-icons/lib';
import { SideBarContainer,
         SideBarWrapper,
         SideBarLink,
         Links} from './SideBarElements.js'

const SideBar = () => {
    return (
        <>
            <IconContext.Provider value={{size: "24px"}}>
                <SideBarContainer>
                    <SideBarWrapper>
                        <SideBarLink to="/">
                            <AiFillHome/>
                            <Links>Home</Links> 
                        </SideBarLink>
                        <SideBarLink to="/cadastro">
                            <ImPlus/>
                            <Links>Cadastro</Links> 
                        </SideBarLink>
                        <SideBarLink to="/clientes">
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

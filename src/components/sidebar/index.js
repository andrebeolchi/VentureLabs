import React from 'react'
import {FaUserPlus, FaUsers} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { SideBarContainer,
         SideBarWrapper,
         SideBarLink,
         Links} from './SideBarElements.js'

const SideBar = () => {
    return (
        <>
            <IconContext.Provider value={{size: 24}}>
                <SideBarContainer>
                    <SideBarWrapper>
                        <SideBarLink to="/cadastro">
                            <FaUserPlus/>
                            <Links>Cadastro</Links> 
                        </SideBarLink>
                        <SideBarLink to="/">
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

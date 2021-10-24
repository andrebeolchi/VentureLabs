import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Color} from '../global/Color.js'

export const SideBarContainer = styled.div`
    width: 500px;
    height: 100vh;
    overflow: hidden;

    background-color: ${Color.black};

    @media screen and (max-width: 1024px){
        position: fixed;
        top:0;
        right: ${({isOpen}) => (isOpen ? '100%' : '0%')};
        transition: 0.3s ease-in-out;
        width: 100vw;
        z-index: 10;
    }
`

export const SideBarWrapper = styled.div`
    height: 100%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SideBarLink = styled(Link)`
    cursor: pointer;
    margin: 24px 0;
    transition: all 0.2s;
    text-decoration: none;
    font-size: 20px;
    color: ${Color.white};
    width: 60%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    
    &:hover{
        color: ${Color.blue};
    }
    `

export const Links = styled.p`
    margin: 0 16px;
    font-size: 24px;
`

export const CloseIcon = styled.p`
    cursor: pointer;
    color: ${Color.white};
    float: right;
    margin: 16px;
    transition: all 0.2s;

    &:hover{
        color: ${Color.blue}
    }
    @media screen and (min-width: 1025px) {
        display: none;
    }
`

export const OpenIcon = styled.p`
    cursor: pointer;
    color: ${Color.white};
    margin: 8px;
    transition: all 0.2s;
    position: absolute;
    z-index: 1;

    &:hover{
        color: ${Color.blue}
    }
    
    @media screen and (min-width: 1025px) {
        display: none;
    }
`
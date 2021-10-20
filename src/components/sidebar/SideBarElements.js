import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Color} from '../global/Color.js'

export const SideBarContainer = styled.div`
    width: 20vw;
    height: 100vh;
    overflow: hidden;

    background-color: ${Color.black};

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const SideBarWrapper = styled.div`
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SideBarLink = styled(Link)`
    cursor: pointer;
    margin: 24px 0;
    width: 50%;
    
    transition: all 0.2s;
    text-decoration: none;
    font-size: 24px;
    color: ${Color.white};
    
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
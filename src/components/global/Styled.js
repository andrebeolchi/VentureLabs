import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Color} from './Color'

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${Color.black};
    overflow: hidden;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${Color.white};

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Title = styled.h1`
    font-size: 32px;
    color: ${Color.white};
    margin-bottom: 8px;

    @media screen and (max-width: 425px) {
        font-size: 24px;
    }
`

export const SubTitle = styled.h2`
    font-size: 24px;
    color: ${Color.gray};

    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 32px;
    
    @media screen and (max-width: 425px) {
        flex-direction: column-reverse;
        justify-content: center;
    }
`

export const Col = styled.div`
    padding: 32px;
`

export const Button = styled(Link)`
    width: 45%;
    padding: 16px 0;
    border-radius: 50px;
    text-decoration: none;
    text-align: center;
    background-color: ${({isPrimary}) => (isPrimary ? Color.blue : Color.lightBlack)};       
    color: ${Color.white};
    opacity: 0.9;
    
    font-size: 16px;
    cursor: pointer;
    
    &:focus, &:hover {
        opacity: 1;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
    @media screen and (max-width: 425px) {
        width: 80%;
        margin: 8px;
    }
    `

export const Image = styled.img`
    width: 300px;

    @media screen and (max-width: 375px) {
        width: 180px;
    }
`
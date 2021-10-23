import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Color} from '../global/Color'

// var iHeight = window.innerHeight()
export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ListaWrapper = styled.div`
    background-color: ${Color.darkBlack};
    border-radius: 8px;
    padding: 16px;
    min-width: 80%;;
    height: 60vh;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background: ${Color.blue};
        border-radius: 16px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: #919191;
    }

    @media screen and (max-width: 768px){
        width: 90%;
        height: 80%;
    }
`

export const Linha = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    border-bottom: 1px solid ${Color.gray};
    
    &:hover{
        background: ${Color.black};
        font-weight: 600;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const CardH1 = styled.h1`
    position: sticky;
    top: 0;
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
    color: ${Color.white};
`

export const LinkLinha = styled(Link)`
    text-decoration: none;
    color: ${Color.white};
    font-weight: 400;
    cursor: pointer;
`

export const Text = styled.p`
    font-style: ${({estilo}) => (estilo === "italico" ? "italic" : "normal")};
    font-weight: ${({estilo}) => (estilo === "negrito" ? "bold" : "normal")};
    
    @media screen and (max-width: 768px){
        margin: 2px 0;
    }
`

// Dados.js

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: ${Color.darkBlack};
    border-radius: 20px;
    width: 500px;
    
    -webkit-box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.5); 
    box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.5);

    color: ${Color.gray};
    
    @media screen and (max-width: 768px){
        width: 90%;
    }
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
`
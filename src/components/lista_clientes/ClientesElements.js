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
    background-color: ${Color.white};
    border-radius: 8px;
    padding: 16px;
    min-width: 80%;;
    max-height: 60vh;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background: ${Color.darkgray};
        border-radius: 16px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: #919191;
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
        background: ${Color.lightgray};
        font-weight: 600;
    }
`

export const CardH1 = styled.h1`
    position: sticky;
    top: 0;
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
`

export const LinkLinha = styled(Link)`
    text-decoration: none;
    color: ${Color.black};
    font-weight: 400;
    cursor: pointer;
`

export const Text = styled.p`
    font-style: ${({estilo}) => (estilo == "italico" ? "italic" : "normal")};
    font-weight: ${({estilo}) => (estilo === "negrito" ? "bold" : "normal")};
`

// Dados.js

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: ${Color.white};
    border-radius: 20px;
    min-width: 600px;
    width: fit-content;
    
    -webkit-box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.5); 
    box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.5);

    @media screen and (max-width: 768px){
        width: 80%;
    }
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
`
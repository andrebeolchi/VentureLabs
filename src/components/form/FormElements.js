import styled from 'styled-components';
import {Color} from '../global/Color';

var iHeight = window.innerHeight;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        height: ${iHeight}px;
    }
`

export const FormWrapper = styled.div`
    padding: 32px;
    background-color: ${Color.darkBlack};
    width: 40%;
    height: 80%;
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    @media screen and (max-width: 1024px){
        width: 90%;
        height: 80%;
        min-height: 650px;
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        min-height: 650px;
    }
`

export const FormH1 = styled.h1`
    color: ${Color.white};
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    
    @media screen and (min-width: 650px){
        margin-bottom: 25px;
    }
`

// --------- Etapas

export const StepsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    
    @media screen and (min-width: 768px) {
        margin-bottom: 50px;
    }
`

export const Step = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 2;

    height: 80px;
    width: 80px;
    padding: 8px;
    border-radius: 4px;
    
    background-color: ${({isHere}) => (isHere ? Color.blue : Color.gray)};
    color: ${({isHere}) => (isHere ? Color.white : Color.lightBlack)};
    
    @media screen and (max-width: 768px) {
        height: 60px;
        width: 60px;
    }
`

export const StepName = styled.p`
    margin-top: 8px;
    font-weight: bold;
    font-size: 12px;
    
    @media screen and (max-width: 768px) {;
        font-size: 10px;
    }
`

// --------- Form

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
    transition: all 0.2s ease-in-out;
`

export const Label = styled.label`
    margin-bottom: 6px;
    font-size: 14px;
    color: ${Color.white};

    &:first-child {
        margin-top: 0px;
    }
    margin-top: 16px;

    @media screen and (max-width: 768px){
        margin-bottom: 8px;
    }

`

export const Input = styled.input`
    padding: 16px 16px;

    background-color: ${Color.lightBlack};
    color: ${Color.white};
    border-radius: 4px;
    max-height: 50px;
    width: 100%;
    border: none;
    

    &[value='']{
        border: ${({isEmpty}) => (isEmpty ? `1px solid ${Color.red}` : 'none')};
    }


    &:hover{
        border: 1px solid ${Color.gray};
    }

    &:focus{
        border: 1px solid ${Color.blue};
    }

    /* Remove Arrow - Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Remove Arrow - Firefox */
    &[type=number] {
      -moz-appearance: textfield;
    }
    
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    
    &:last-of-type {
        margin-top: auto;
    }
`

export const FormButton = styled.button`
    width: 45%;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    
    background-color: ${({isPrimary}) => (isPrimary ? Color.blue : Color.lightBlack)};       
    color: ${Color.white};
    opacity: 0.9;
    
    font-size: 20px;
    cursor: pointer;

    &:only-child{
        width: 100%;
    }

    &:focus, &:hover {
        opacity: 1;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const MiniExample = styled.small`
    font-size: 8px;
    color: ${Color.gray};
    margin: 8px 2px 0px 4px;;
    text-transform: uppercase:
`
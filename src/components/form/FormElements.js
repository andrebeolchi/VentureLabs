import styled from 'styled-components';
import {Color} from '../global/Color';

export const FormCard = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormWrapper = styled.div`
    padding: 32px;
    background-color: ${Color.white};
    width: 600px;
    height: 700px;
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 25px;
    color: ${Color.black};
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`

// --------- Etapas

export const StepsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 50px;
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
    color: ${({isHere}) => (isHere ? Color.white : Color.darkgray)};
`

export const StepName = styled.p`
    margin-top: 8px;
`

// --------- Form

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all 0.2s ease-in-out;
`

export const Label = styled.label`
    margin-bottom: 6px;
    font-size: 14px;
    color: ${Color.black};
`

export const Input = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 1px solid ${Color.gray};
    border-radius: 4px;
    max-height: 50px;
    width: 100%;
    
    &:hover{
        border: 1px solid ${Color.lightblue};
    }

    &:focus{
        border: 1px solid ${Color.blue};
    }    

    &::-webkit-inner-spin-button {
      display: none;
    }

    &::-webkit-calendar-picker-indicator {
      display: none;
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
    
    background-color: ${({isNext}) => (isNext ? Color.blue : Color.gray)};       
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
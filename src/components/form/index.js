import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {MdHomeWork, MdPerson, MdInfo} from 'react-icons/md'
import {IconContext} from 'react-icons'
import axios from 'axios';
import { Container,
         FormWrapper,
         FormH1,
         StepsWrapper,
         Step,
         StepName,
         FormContent} from './FormElements';
import { Dados, Endereco, Outros} from './Forms';
import { maskCep, maskTel, maskRenda, maskCpf, maskData } from '../../utils/masks';

const Form = () => {
    const [step, setStep] = useState(1);

    const history = useHistory();
    
    const [alertOpen, setAlertOpen] = useState(false);

    const [dados, setDados] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        tel: '',
        cep: '',
        endereco1: '',
        endereco2: '',
        dataNascimento: '',
        cpf: '',
        renda: ''
    });

    function goNextStep() {
        switch(step) {
            case 1:
                if ((dados.nome === "") || (dados.sobrenome === "") || (dados.email === "") || (dados.tel === "")){
                    return setAlertOpen(true)
                } else {
                    dados.tel = maskTel(dados.tel)
                    setAlertOpen(false)
                    return setStep((step) => step + 1);
                    }
            case 2:
                if ((dados.cep === "") || (dados.endereco1 === "")){
                    dados.cep = maskCep(dados.cep)
                    return setAlertOpen(true)
                } else {
                    setAlertOpen(false)
                    return setStep((step) => step + 1);
                }
            case 3:
                setAlertOpen(false)
                return setAlertOpen(false);
            default:
                return console.log("default");
        }
    }

    function goBackStep() {
        setStep(step => step - 1);
    }


    function onChange(ev){
        const { name, value } = ev.target;

        setDados({ ...dados, [name]: value});
    }

    function onSubmit(ev){
        ev.preventDefault();

        if ((dados.dataNascimento === "") || (dados.cpf === "") || (dados.renda === "")){
            return setAlertOpen(true)
        } else {
            dados.dataNascimento = maskData(dados.dataNascimento)
            dados.cpf = maskCpf(dados.cpf)
            dados.renda = maskRenda(dados.renda)
            axios.post('http://localhost:8000/cliente', dados)
            .then((response) => {
                history.push('/');
            });
        }
    }

    return (
        <>
            <IconContext.Provider value={{size:"28px", color: 'inherit' }}>
                <Container>
                    <FormWrapper>
                        <FormH1>Cadastro de Clientes</FormH1>
                        <StepsWrapper>
                            <Step isHere={(step === 1)}>
                                <MdPerson/>
                                <StepName>Dados</StepName>
                            </Step>
                            <Step isHere={(step === 2)}>
                                <MdHomeWork/>
                                <StepName>Endereço</StepName>
                            </Step>
                            <Step  isHere={(step === 3)}>
                                <MdInfo/>
                                <StepName>Outros</StepName>
                            </Step>
                        </StepsWrapper>
                        
                        <FormContent onSubmit={onSubmit}>
                            {step === 1 && <Dados 
                                                next= {goNextStep}
                                                onChange= {onChange}
                                                nome={dados.nome}
                                                sobrenome={dados.sobrenome}
                                                email={dados.email}
                                                tel={dados.tel}
                                                isEmpty={alertOpen}
                                            />}

                            {step === 2 && <Endereco
                                                next={goNextStep}
                                                back={goBackStep}
                                                onChange= {onChange}
                                                cep= {dados.cep}
                                                endereco1= {dados.endereco1}
                                                endereco2= {dados.endereco2}
                                                isEmpty={alertOpen}
                                            />}

                            {step === 3 && <Outros 
                                                next={goNextStep}
                                                back={goBackStep}
                                                onChange= {onChange}
                                                dataNascimento = {dados.dataNascimento}
                                                cpf = {dados.cpf}
                                                renda = {dados.renda}
                                                isEmpty={alertOpen}
                                            />}
                        </FormContent>
                    </FormWrapper>
                </Container>
            </IconContext.Provider>
        </>
    )
}


export default Form

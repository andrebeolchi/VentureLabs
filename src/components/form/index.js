import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { FormCard,
         FormWrapper,
         FormH1,
         StepsWrapper,
         Step,
         StepIcon,
         StepName,
         FormContent,
         Label,
         Input,
         ButtonWrapper,
         FormButton} from './FormElements';

const Form = () => {
    const [step, setStep] = useState(1);

    const history = useHistory();

    function goNextStep() {
        if (step === 3) return;
        setStep((step) => step + 1);
    }

    function goBackStep() {
        setStep(step => step - 1);
    }

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

    function onChange(ev){
        const { name, value } = ev.target;

        setDados({ ...dados, [name]: value});
    }

    function onSubmit(ev){
        ev.preventDefault();

        axios.post('http://localhost:8000/clientes', dados)
            .then((response) => {
                history.push('/');
            });
    }

    return (
        <>
            <FormCard>
                <FormWrapper>
                    <FormH1>Cadastro de Clientes</FormH1>
                    <StepsWrapper>
                        <Step>
                            <StepIcon>D</StepIcon>
                            <StepName>Dados</StepName>
                        </Step>
                        <Step>
                            <StepIcon>E</StepIcon>
                            <StepName>Endereço</StepName>
                        </Step>
                        <Step>
                            <StepIcon>O</StepIcon>
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
                                        />}

                        {step === 2 && <Endereco
                                            next={goNextStep}
                                            back={goBackStep}
                                            onChange= {onChange}
                                            cep= {dados.cep}
                                            endereco1= {dados.endereco1}
                                            endereco2= {dados.endereco2}
                                        />}

                        {step === 3 && <Outros 
                                            next={goNextStep}
                                            back={goBackStep}
                                            onChange= {onChange}
                                            dataNascimento = {dados.dataNascimento}
                                            cpf = {dados.cpf}
                                            renda = {dados.renda}
                                        />}
                    </FormContent>
                </FormWrapper>
            </FormCard>
        </>
    )
}

function Dados(props){
    return(
        <>
            <Label for="nome">Nome</Label>
            <Input id="nome" name="nome" type="text" onChange={props.onChange} value={props.nome}/>

            <Label for="sobrenome">Sobrenome</Label>
            <Input id="sobrenome" name="sobrenome" type="text" onChange={props.onChange} value={props.sobrenome}/>

            <Label for="email">E-mail</Label>
            <Input id="email" name="email" type="email" onChange={props.onChange} value={props.email}/>

            <Label for="tel">Telefone</Label>
            <Input id="tel" name="tel" type="number" onChange={props.onChange} value={props.tel}/>

            <ButtonWrapper>
                <FormButton isNext={true} onClick={props.next}>Próximo</FormButton>
            </ButtonWrapper>
        </>
    )
}

function Endereco(props){
    return(
        <>
            <Label for="cep">CEP</Label>
            <Input id="cep" name="cep" type="text" onChange={props.onChange} value={props.cep}/>

            <Label for="endereco1">Endereço 1</Label>
            <Input id="endereco1" name="endereco1" type="text" onChange={props.onChange} value={props.endereco1}/>

            <Label for="endereco2">Endereço 2</Label>
            <Input id="endereco2" name="endereco2" type="text" onChange={props.onChange} value={props.endereco2}/>
            
            <ButtonWrapper>
                <FormButton isNext={false} onClick={props.back}>Voltar</FormButton>
                <FormButton isNext={true} onClick={props.next}>Próximo</FormButton>
            </ButtonWrapper>
        </>
    )
}

function Outros(props){
    return(
        <>
           <Label for="dataNascimento">Data de Nascimento</Label>
           <Input id="dataNascimento" name="dataNascimento" type="date" onChange={props.onChange} value={props.dataNascimento}/>

           <Label for="cpf">CPF</Label>
           <Input id="cpf" name="cpf" onChange={props.onChange} value={props.cpf} type="number"/>

           <Label for="renda">(R$) Renda Mensal</Label>
           <Input id="renda" name="renda" onChange={props.onChange} value={props.renda} type="number"/>
           
           <ButtonWrapper>
               <FormButton isNext={false} onClick={props.back}>Voltar</FormButton>
               <FormButton isNext={true} type="submit">Salvar</FormButton>
           </ButtonWrapper>
        </>
    )
}

export default Form

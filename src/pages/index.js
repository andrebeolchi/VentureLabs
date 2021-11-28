import React from 'react'
import Sign from '../assets/sign.svg'
import { Container,
         Wrapper,
         Col,
         Title,
         SubTitle,
         ButtonWrapper,
         Button,
         Image} from '../components/global/Styled'

const Index = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Col>
                        <Image src={Sign} alt=""/>
                    </Col>
                    <Col>
                        <Title>Bem vindo ao WEB APP de clientes!</Title>
                        <SubTitle>Fique a vontade para testar o site :)</SubTitle>
                        <ButtonWrapper>
                            <Button to="/clientes" >Listar Clientes</Button>
                            <Button to="/cadastro" isPrimary={true}>Cadastrar Clientes</Button>
                        </ButtonWrapper>
                    </Col>
                </Wrapper>
            </Container>
        </>
    )
}

export default Index

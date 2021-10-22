import React, { useEffect, useState } from 'react';
import {Container,
        CardH1,
        DataWrapper,
        RowWrapper,
        Text} from './ClientesElements';

const Dados = (props) => {
    var id = props.id;

    const [valor, setValor] = useState([])
    
    useEffect(() => {
        if (id) {
            fetch("/cliente/"+id)
            .then((response) => {
                return response.json()
            }).then((response) => {
                setValor(response)
            })
        }
    }, [])

    return (
        <>
            <Container>
                <DataWrapper>
                    <CardH1>Informações</CardH1>
                    <RowWrapper>
                        <Text estilo={"negrito"}>Nome:</Text>
                        <Text>{valor.nome}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>Sobrenome:</Text>
                        <Text>{valor.sobrenome}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>E-mail:</Text>
                        <Text>{valor.email}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>Telefone:</Text>
                        <Text>{valor.tel}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>CEP:</Text>
                        <Text>{valor.cep}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>Endereço 1:</Text>
                        <Text>{valor.endereco1}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>Endereço 2:</Text>
                        <Text>{valor.endereco2}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>Data de Nascimento:</Text>
                        <Text>{valor.dataNascimento}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>CPF:</Text>
                        <Text>{valor.cpf}</Text>
                    </RowWrapper>
                    <RowWrapper>
                        <Text estilo={"negrito"}>Renda Mensal:</Text>
                        <Text>{valor.renda}</Text>
                    </RowWrapper>
                </DataWrapper>
            </Container>
        </>
    )
}

export default Dados

import React, {useEffect, useState} from 'react';
import { Container,
         CardH1,
         ListaWrapper,
         LinkLinha,
         Linha,
         Text} from './ClientesElements';
import axios from 'axios';

const Index = () => {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        axios.get('/cliente')
            .then((response) => {
                setClientes(response.data);
            });
    }, []);
    

    return (
        <>
            <Container>
                    <CardH1>Lista de Clientes</CardH1>
                <ListaWrapper>
                    {clientes.map((cliente, i) => (
                        <LinkLinha to={`/cliente/${cliente.id}`} key={i}>
                            <Linha>
                                <Text>{cliente.nome} {cliente.sobrenome}</Text>
                                <Text estilo={"italico"}>{cliente.tel}</Text>
                            </Linha>
                        </LinkLinha>
                    ))}
                </ListaWrapper>
            </Container>
        </>
    )
}

export default Index

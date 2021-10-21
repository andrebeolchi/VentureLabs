import React, {useEffect, useState} from 'react';
import { ListaContainer,
    ListaH1,
    ListaWrapper,
    LinkLinha,
    Linha,
    Text } from './ListaClientesElements';
import axios from 'axios';

const ListaClientes = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/clientes')
            .then((response) => {
                setClientes(response.data);
            });
    }, []);
    

    return (
        <>
            <ListaContainer>
                    <ListaH1>Lista de Clientes</ListaH1>
                <ListaWrapper>
                    {clientes.map((cliente) => (
                        <LinkLinha to={`/cliente/${cliente.id}`}>
                            <Linha>
                                <Text>{cliente.nome} {cliente.sobrenome}</Text>
                                <Text italic={true}>{cliente.tel}</Text>
                            </Linha>
                        </LinkLinha>
                    ))}
                </ListaWrapper>
            </ListaContainer>
        </>
    )
}

export default ListaClientes

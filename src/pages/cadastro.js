import React from 'react'
import SideBar from '../components/sidebar'
import Form from '../components/form'
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    flex-direction: row;
`;


const Index = () => {
    return (
        <>
            <Content>
                <SideBar />
                <Form />
            </Content>
        </>
    )
}

export default Index

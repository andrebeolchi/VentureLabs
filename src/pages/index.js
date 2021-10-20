import React from 'react'
import SideBar from '../components/sidebar'
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
            </Content>
        </>
    )
}

export default Index

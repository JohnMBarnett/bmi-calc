import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Background from './components/background';
import MetricForm from './components/metric';

const initialFormValues = {
    height: 0,
    weight: 0
};

const StyledLink = styled(Link) `
    text-align: center;
    font-size: 3rem;
    text-decoration: none;
    width: 10%;
    color: #232b2b;
    background: #E6F4F1;
    padding: 2rem;
    margin: 2rem;
    border: solid black 1px;
    transition-duration: 300ms;

    &:hover {
        transform: scale(1.1);
    }
`

const ButtonPositioning = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const MainPage = () => {

    return (
        <>

            <Background>
                <h1>Choose your system of measurement</h1>
                <ButtonPositioning>
                    <StyledLink to='/metric'>Metric</StyledLink>
                    <StyledLink to='/imperial'>Imperial</StyledLink>
                </ButtonPositioning>
            </Background>
        </>
    )
}

export default MainPage;
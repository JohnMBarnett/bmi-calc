import styled from 'styled-components';

const FormBox = () => {

    const FormContainer = styled.div `
        text-align: center;
        color: #232b2b;
        background-color: #E6F4F1;
        height: 60vh;
        width: 30%;
        border-radius: 40px;
    `

    return (
        <FormContainer>
            <h1>B.M.I. Calculator</h1>
        </FormContainer>
    )
}

export default FormBox;
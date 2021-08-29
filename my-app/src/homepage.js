import styled from 'styled-components';
import FormBox from './components/box'

const MainPage = () => {
    const Background = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: radial-gradient(circle at top left, #51A1DD 30%, #0053B5);
        height: 100vh;
        font-size: 62.5%;
    `

    return (
        <Background>
            <FormBox></FormBox>
        </Background>
    )
}

export default MainPage;
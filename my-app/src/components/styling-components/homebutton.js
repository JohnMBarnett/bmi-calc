import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledHomeLink = styled(Link) `
    text-align: center;
    font-size: 2rem;
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
export default StyledHomeLink;
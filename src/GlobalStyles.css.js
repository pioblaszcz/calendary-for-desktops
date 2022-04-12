import styled from 'styled-components';

const GlobalStyles = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.darkMode ? '#444' : '#fff'}
`;

export default GlobalStyles;
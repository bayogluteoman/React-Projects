import styled from 'styled-components';

export const HomePageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const Developer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    font-weight: bold;
    padding: 1rem;

    a:visited { color: purple; }
    a:link { color: blue; }
    a:hover { background: yellow; }
    a:active { color: lime; } 

`;
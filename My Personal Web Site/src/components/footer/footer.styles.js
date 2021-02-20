import styled from 'styled-components';

export const FooterItem = styled.div`
    font-family: 'Indie Flower', cursive;   
    height: 0.1rem;
    background: #000;
    padding: 2.8rem;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;

    &:hover{
      color: '#37b5ff';
    }

    @media screen and (max-width: 800px){
        padding: 2.6rem;
      }
    
`;


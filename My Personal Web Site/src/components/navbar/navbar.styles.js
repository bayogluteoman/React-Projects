import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    font-size: 1rem;
    height: 10vh;
    background: #fff;
    padding: 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: auto;

    @media screen and (max-width: 800px){
        width:100%;
    }
    
`;

export const NavItems = styled.div`
display: flex;
    justify-content: space-between;
`;

export const Logo = styled(Link)`
padding-left: 2rem;
text-decoration: none;
`;

export const NavbarLink = styled(Link)`
font-family: 'Indie Flower', cursive;
font-weight: bolder;
font-size: 1.1rem;
color: #000;
font-weight: bolder;
text-decoration: none;
padding: 1rem;
justify-content: space-between;


`;
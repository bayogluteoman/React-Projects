import React from 'react';
import { withRouter } from 'react-router-dom';
import Logom from '../../img/logo.png';
import { NavbarContainer, NavItems, Logo, NavbarLink,  } from './navbar.styles';

const Navbar = () => {
    return (
        <NavbarContainer> 
          <Logo to="/"><img width='30rem' height='30rem' src={Logom}/></Logo>
            <NavItems>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about" >About</NavbarLink>
                <NavbarLink to="/contact">Get In Touch</NavbarLink>
            </NavItems>
        </NavbarContainer>
    )
}

export default withRouter(Navbar);

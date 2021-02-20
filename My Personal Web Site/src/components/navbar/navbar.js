import React from 'react';
import { withRouter } from 'react-router-dom';
import Logom from '../../img/logo.png';
import { NavbarContainer, NavItems, Logo, NavbarLink,  } from './navbar.styles';
import { AnimationWrapper } from 'react-hover-animation';

const Navbar = () => {
    return (
        <NavbarContainer> 
          <Logo to="/"><img width='30rem' height='30rem' src={Logom}/></Logo>
            <NavItems>
            <AnimationWrapper><NavbarLink to="/">Home</NavbarLink></AnimationWrapper>
            <AnimationWrapper> <NavbarLink to="/about" >About</NavbarLink></AnimationWrapper>   
            <AnimationWrapper><NavbarLink to="/contact">Get In Touch</NavbarLink></AnimationWrapper>    
            
            </NavItems>
        </NavbarContainer>
    )
}

export default withRouter(Navbar);

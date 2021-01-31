import React from 'react';
import Directory from '../../components/directory/directory.components';

import { HomePageContainer, Developer } from './homepage.styles';

const HomePage = ()=> (
    <HomePageContainer>
       <Directory />
       <Developer>Maden by <a href="https://www.linkedin.com/in/teoman-bayo%C4%9Flu-47a647197/"> Teoman Bayoğlu </a> </Developer>
    </HomePageContainer>
);

export default HomePage;
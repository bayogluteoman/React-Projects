import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Image2 from '../../img/teo.png';
import Progressbar from '../../components/progressBar/progressBar';
import { motion } from 'framer-motion';
import { AboutContainer, GroupA, GroupB,SubA,SubB,Button } from './about.styles';

import { Helmet } from 'react-helmet';

const TITLE = 'About | Teoman Bayoglu';
 

const AboutMePage = (props) => (
  <motion.div 
            initial={{ opacity: 0}} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{duration: 0.7}}
            >
    <div>
          <Helmet>
            <title>{ TITLE }</title>
          </Helmet>
    <Navbar/>
    <AboutContainer>

    <div class="grid-container">
       <div class="A">

       <GroupA>  
    <SubA>
        <h2 style={{  color:'#37b5ff', textAlign: 'center'}}>About me</h2>
            <p>I study Computer Engineering in Eskisehir Technical Universtiy. I am
              interested to work as a Web developer and my aim is to get good opportunities 
              in this adventure. Beside I have done some projects which is related to Java,
              C# and React Native. If we look at the social side, I participated in 2 European Union projects.
              Also I was in Austria for Erasmus.  </p>
             
    </SubA>
    </GroupA>

    
    <GroupB>
      <SubB>
        <Progressbar/>        
      </SubB>
    </GroupB> 
        
    <Button onClick={() => props.history.push('/contact')}> Contact Me </Button>
       </div>
        <div class="B">

          <div class='splash'>
            <img  class='teo' src={Image2}/>
          </div>
          
        </div>
  </div>

    </AboutContainer>
    
    <Footer/>       
    </div>
    </motion.div>
); 

export default AboutMePage;

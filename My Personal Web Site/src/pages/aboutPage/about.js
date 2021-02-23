import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Image2 from '../../img/kahve.jpg';
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
    <AboutContainer >

    <div class="grid-container">
       <div class="A">

       <GroupA>  
         <SubA>
        <h2 style={{  color:'#000', textAlign: 'center'}}>About me</h2>
            <p>Glad you made it to my website! My name is Teoman.
               I'm studying Software Engineering at Eskisehir
                Technical University. I am looking forward to learning more and contributing to the 
                field of web development. Besides I have done more projects which are related to Java,
                C# and React Native. I passionate about developing solutions for people to make
                their life easy and connecting multiple systems, tools, solutions 
                together while learning new technologies. I have attempted a 
                volunteer project in European Union such as helping refugees.
                I was also an exchange student in Austria. 
                Always looking to network and build
                connections, feel free to reach out on LinkedIn!
                </p>
             
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

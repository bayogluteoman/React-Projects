import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Typical from 'react-typical';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { HomeContainer, Yazı, steps, LogoItems,
   GithubLogo, LinkedinLogo, TwitterLogo, InstaLogo,
} from './home.styles';

import { Helmet } from 'react-helmet';

const TITLE = 'Home | Teoman Bayoglu';

const HomePage = () => (
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
        <HomeContainer>
        <div class="grid-container">
             <div class="top">
             <Yazı>
                <Typical
                    loop={Infinity}
                    wrapper="span"
                    steps={steps}
                />    
            </Yazı>
             </div>
                <div class="bottom">
                    
            <LogoItems>
            <LinkedinLogo><FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/teoman-bayo%C4%9Flu-47a647197/", "_blank")}/></LinkedinLogo> 
            <GithubLogo><FaGithub onClick={() => window.open("https://github.com/bayogluteoman", "_blank")}/> </GithubLogo> 
            <TwitterLogo><FaTwitter onClick={() => window.open("https://mobile.twitter.com/bayogluteomann", "_blank")}/> </TwitterLogo> 
            <InstaLogo><FaInstagram onClick={() => window.open("https://www.instagram.com/teomanbayoglu/", "_blank")}/> </InstaLogo>    
            </LogoItems>
                </div>
        </div>

        </HomeContainer>
        <Footer/>
    </div>
    </motion.div>
); 

export default HomePage;
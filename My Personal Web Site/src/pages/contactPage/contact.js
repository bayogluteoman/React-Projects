import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import * as emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import {ContactPageContainer, ContactFormContainer, Input, Textarea, Button } from './contact.styles';

import { Helmet } from 'react-helmet';
import { AnimationWrapper } from 'react-hover-animation';

const TITLE = 'Contact | Teoman Bayoglu';

function afterClicked(){
    alert('Successfull send !');
  };
  

class ContactPage extends React.Component{
    
    state = {
            displayName: '',
            email: '',
            subject: '',
            message: '',
        };

    handleSubmit(e) {

        e.preventDefault();
        const { displayName, email, subject, message } = this.state;
        
        let templateParams = {
            displayName: displayName,
            email: email,
            subject: subject,
            message: message,
         };

         emailjs.send(
          'gmail',
          'template_0fcv719',
           templateParams,
          'user_RimOnGyUfCEMCL9yCSP74'
         )

         this.setState({
            displayName: '',
            email: '',
            subject: '',
            message: '',
            
          });

     };

 

      handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
    
   

    render(){
        return(
            
            <motion.div 
            initial={{ opacity: 0}} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{duration: 0.7}}
            >
                    <Helmet>
                    <title>{ TITLE }</title>
                    </Helmet>
                <Navbar/>
                    <ContactPageContainer>
                        <ContactFormContainer onSubmit={this.handleSubmit.bind(this)}>
                           
                            <Input type='text'
                                name='displayName'
                                placeholder="Enter your name"
                                value={this.state.displayName}
                                onChange={this.handleChange.bind(this, 'displayName')}
                                required
                            />

                            <Input type='email'
                                name='email'
                                placeholder="Enter your email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this, 'email')}
                                required
                            />

                            <Input type='text'
                                name='subject'
                                placeholder="Type the subject"
                                value={this.state.subject}
                                onChange={this.handleChange.bind(this, 'subject')}
                                required
                            />
                            
                            <Textarea type='textarea' 
                                name='message' 
                                placeholder="Type your message"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                                required 
                            />

                            <Button onClick={afterClicked} class='button' type='submit'
                             variant="primary">Send</Button>
                            
                        </ContactFormContainer>
                    </ContactPageContainer>
                    <Footer/>
                    </motion.div>
        );
    }
}


export default ContactPage;
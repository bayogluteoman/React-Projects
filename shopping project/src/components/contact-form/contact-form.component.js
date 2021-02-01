import React from 'react';
import { CustomButtonContainer } from '../custom-button/custom-buton.styles';
 import {
     ContactFormContainer,
     FormInputContainer,
     Textarea
 } from './contact-form.styles';

 const ContactForm = () =>(
    

    	<ContactFormContainer>
                <FormInputContainer type='text'
                    name='displayName'
                    placeholder="Enter your name"
                    required
                />
                <FormInputContainer type='email'
                    name='email'
                    placeholder="Enter your email"
                    required
                />
                <FormInputContainer type='text'
                    name='subject'
                    placeholder="Type the subject"
                    required
                />
            
            <Textarea 
                    type='textarea' 
                    id='textarea' 
                    placeholder="Type your message" 
                    required 
            />
		
            <CustomButtonContainer type='submit'>Send</CustomButtonContainer>

		</ContactFormContainer>
 );
 
export default ContactForm;
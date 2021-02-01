import React from 'react';
import { CustomButtonContainer } from '../custom-button/custom-buton.styles';
 import {
     ContactFormContainer,
     FormInputContainer,
     FormInputLabel,
     Textarea
 } from './contact-form.styles';

 class ContactForm extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    };

render(){
    const{displayName, email, subject, message } = this.state;
	return (
    	<ContactFormContainer>
            <FormInputLabel value='name'/>
                <FormInputContainer type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    placeholder="Enter your name"
                    required
                />
            <FormInputLabel  value='email'/>
                <FormInputContainer type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Enter your email"
                    required
                />
            <FormInputLabel  value='subject'/>
                <FormInputContainer type='text'
                    name='subject'
                    onChange={this.handleChange}
                    value={subject}
                    placeholder="Type the subject"
                    required
                />
            
            <Textarea 
                    type='textarea' 
                    id='textarea' 
                    value={message}
                    placeholder="Type your message" 
                    required 
            />
		
            <CustomButtonContainer type='submit'>Send</CustomButtonContainer>

		</ContactFormContainer>
	);
};
 }
export default ContactForm;
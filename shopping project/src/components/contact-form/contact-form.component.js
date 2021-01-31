import React from 'react';
import { GroupContainer } from '../form-input/form-input.styles';
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
            subject: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    };

render(){
    const{displayName, email, subject } = this.state;
	return (
        <GroupContainer>
    	<ContactFormContainer>
        <FormInputLabel value='name'>Name </FormInputLabel>
            <FormInputContainer type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
              />
        <FormInputLabel  value='email'>Email </FormInputLabel>
            <FormInputContainer type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            label='Email'
                            required
                        />
        <FormInputLabel  value='subject'>Subject </FormInputLabel>
            <FormInputContainer type='text'
                                        name='subject'
                                        label='Subject'
                                        onChange={this.handleChange}
                                        value={subject}
                                        required
                                    />
		     <FormInputLabel  value='subject'>Message </FormInputLabel>
			<Textarea type='textarea' id='textarea' required />
			<CustomButtonContainer type='submit'>Send</CustomButtonContainer>
		</ContactFormContainer>
        </GroupContainer>
	);
};
 }
export default ContactForm;

/*<FormInputLabel htmlFor='email'>Name</FormInputLabel>
			<FormInputContainer type='text' id='name' required />
			<FormInputLabel htmlFor='email' value='email'>Emaillllllllllllllll </FormInputLabel>
			<FormInputContainer type='email' id='email' required />
			<FormInputLabel htmlFor='textarea'>Messageeeeeeeeeeeeeeeeeeeeeeeeeeeeee</FormInputLabel> */
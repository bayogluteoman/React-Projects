import React from 'react';
import ContactForm from '../../components/contact-form/contact-form.component';
import { ContactPageContainer } from './contact.styles';

const ContactPage = () => {
	return (
		<ContactPageContainer>
			<ContactForm />
		</ContactPageContainer>
	);
};

export default ContactPage;
import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const inputsStyle = css`
	width: 100%;
	margin: 10px 0;
	margin-bottom: 2rem;
	padding: 0.6rem 0.5rem;
	border-radius: 10px;
	border: 2px solid #808080;
	outline: none;
	&:focus {
		border: 2px solid #000000;
	}
`;

export const ContactFormContainer = styled.form`
	width: 50rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: left;

	@media screen and (max-width: 800px) {
		align-items: center;
		padding: 2rem 4rem;
	}
`;


export const Textarea = styled.textarea`
	${inputsStyle}
	padding: 1rem 1.5rem; 
    height: 10rem;
    width: 100%;
	resize: vertical;
	border-radius: 20px;
	font-size: 1.4rem;
	font-weight: bold;
	font-family: 'Open Sans Condensed';
	transition: all ease-in .5s;
	&:focus {
		border: 2px solid green;
		
	}

	@media screen and (max-width: 800px) {
		font-size: 1.3rem;
	}
	`;


export const GroupContainer = styled.div`
	position: relative;
	margin: 5rem 0;
`;

export const FormInputLabel = styled.label`
	color: ${mainColor};
	font-size: 20px;
	font-weight: bold;  
`;

export const FormInputContainer = styled.input`
	background: none;
	background-color: white;
	color: ${mainColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-bottom: 1px solid ${subColor};
	margin: 25px 0;
	transition: all ease-out .5s;
	&:focus {
		outline: none;
		border-bottom: 2px solid green;
	}

`;

export const Button = styled.button`
	font-size: 1.1rem;
	padding: 10px 30px;
	background: transparent;
	border: 3px solid #aab056;
	border-radius: 10px;
	cursor: pointer;
	outline: none;
	&:hover {
		border: 3px solid #778056;
		box-shadow: 0 0.1rem 0.4rem #555;
		opacity: 0.8;
	}
	&:focus {
		box-shadow: 0 0.1rem 0.6rem #777;
		opacity: 0.9;
		
	}

`;
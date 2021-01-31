import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const inputsStyle = css`
	width: 30vw;
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
width: 580px;
display: flex;
flex-direction: column;

`;


export const Textarea = styled.textarea`
	${inputsStyle}
    height: 120px;
    width: 580px;
	resize: vertical;
	border-radius: 20px;
`;


export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
 
`;

export const FormInputLabel = styled.label`
  color: ${mainColor};
  font-size: 20px;
  font-weight: bold;
  left: 5px;
  top: 10px;
  
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
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
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
import styled from 'styled-components';
import Image from '../../img/splash.jpg';

export const ContactPageContainer = styled.div`
    display: flex;
    background: url(${Image});
    background-repeat: no-repeat;
    background-size: 40rem 40rem;
    background-position: -20% -230%;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    height:90vh;

    @media screen and (max-width: 800px) {
        background-size: 40rem 50rem;
        background-position: 60% 40%;
	}

`;

export const ContactFormContainer = styled.form`
    color:#fff;
    padding: 2rem;
    border-radius: 2rem;
	width: 30rem;
    height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: left;
    margin-top: 1.4rem;

    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
	}
	
`;

export const Input = styled.input`
    border-radius: 1rem;
    background-color: white;
    color: black;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: 1px solid grey;
    margin: 1rem 0;
    transition: all ease-out .5s;
    &:focus {
	outline: none;
    border: 2px solid green;
		
	}
`;

export const Textarea = styled.textarea`
    padding: 1rem 1.5rem; 
    margin: 1rem 0;
    width: 28rem;
    height: 7rem;
    resize: vertical;
    border-radius: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: 'Open Sans Condensed';
    transition: all ease-in .5s;

	&:focus {
        outline: none;
        border: 2px solid green;
	}

    @media screen and (max-width: 800px) {
        font-size: 1.1rem;
        width: 90%;
	}

   
	`;

export const Button = styled.button`
    background-color: black;
    color: white;
    border: none;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    position: relative;
    bottom: 0.5rem;
    border: 1px solid black;
    box-shadow: 5px 5px 15px 5px #37b5ff;

    &:hover {
    background-color: #37b5ff;
    font-weight: bold;
    color: black;
    border: 1px solid black;
    box-shadow: 5px 5px 15px 5px #000;
    }

    &:focus {
    box-shadow: 0 0.1rem 0.6rem #777;
    opacity: 0.9;
    }

    @media screen and (max-width: 800px){
        &:hover {
            box-shadow: 5px 5px 15px 5px #fff;
        }
      }
    

   

`;

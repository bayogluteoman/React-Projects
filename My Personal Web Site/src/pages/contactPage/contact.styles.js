import styled from 'styled-components';
import Image from '../../img/splash.jpg';

export const ContactPageContainer = styled.div`
   
    display: flex;
    background: url(${Image});
    background-repeat: no-repeat;
    background-size: 30rem 50rem;
    background-position: 50% 50%;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    height:90vh;

    @media screen and (min-width: 800px) {
        background-size: 35rem 40rem;
        background-position: 50% 50%;
	}

`;

export const ContactFormContainer = styled.form`
    font-family: 'Indie Flower', cursive;
    color:#fff;
    padding: 2rem;
    border-radius: 2rem;
	width: 30rem;
    height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    margin-top: 1.4rem;

    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
	}
	
`;

export const Input = styled.input`
    font-family: 'Indie Flower', cursive;
    font-weight: bolder;
    text-align: left;
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
    font-family: 'Indie Flower', cursive;
    font-weight: bolder;
    text-align: left;
    padding: 1rem 1rem; 
    margin: 1rem 0;
    width: 29rem;
    height: 7rem;
    resize: vertical;
    border-radius: 1rem;
    font-size: 1.4rem;
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
font-family: 'Indie Flower', cursive;
background-color: #37b5ff;
color: black;
border: none;
min-width: 10.3rem;
width: auto;
height: 3.125rem;
letter-spacing: 0.5px;
line-height: 3.120rem;
padding: 0 2.18rem;
font-size: 0.93rem;
text-transform: uppercase;
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;
border-radius: 1.5rem;
outline: none;

&:hover {
    background-color: #6ac8ff;
}

    @media screen and (max-width: 800px){
        &:hover {
            box-shadow: 5px 5px 15px 5px #fff;
        }
      }
    

   

`;

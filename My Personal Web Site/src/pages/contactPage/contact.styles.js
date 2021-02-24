import styled from 'styled-components';
import Image from '../../img/splash.jpg';

export const ContactPageContainer = styled.div`

.grid-container {
    display: grid;
    background: url(${Image});
    background-repeat: no-repeat;
    padding: 0 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr; 
    margin-bottom: 2rem;
    margin-top: 1rem;
    margin-left: 3rem;
    margin-right: 3rem;
    height:90vh;
    gap: 0px 0px;
    background-position: 4% 24%;
    background-size:50% 75%;
   

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr; 
        background-position: 70% -24%;
        background-size:103% 72%;
        height:95vh;
        
    }

    @media screen and (min-width: 800px) and (max-width:1110px) {
        background-position: -1% 30%;
        background-size:50% 57%;
	}

    @media screen and (min-width: 1110px)  {
        background-position: -5% 5%;
        background-size:55% 70%;
	}

    


  }


`;

export const ContactFormContainer = styled.form`
    font-family: 'Indie Flower', cursive;
    color:#fff;
    padding: 2rem;
    border-radius: 2rem;
	width: 100%;
    height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

   
    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
        width: 90%;
        margin-top: -3rem;
        
	}

    @media screen and (min-width: 800px) and (max-width:1110px) {
        font-size: 0.8rem;
        width: 90%;
        height: 70%;
        margin-top: 3rem;
     
	}

    @media screen and (min-width: 1110px)  {
        font-size: 0.8rem;
        width: 90%;
        height: 70%; 
        margin-top: 0rem; 
        margin-left: 4rem; 
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

    @media screen and (min-width: 801px) {
        font-size: 1.1rem;
        width:60%; 
	}
`;

export const Textarea = styled.textarea`
    font-family: 'Indie Flower', cursive;
    font-weight: bolder;
    text-align: left;
    padding: 1rem 1rem; 
    margin: 1rem 0;
    width: 100%;
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
        width: 97%;
        height: 20%;
       
	}

    @media screen and (min-width: 801px) {
        font-size: 1.1rem;
        width:58%; 
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
        padding: -1rem;
        &:hover {
            box-shadow: 5px 5px 15px 5px #fff;
        }
      }
`;


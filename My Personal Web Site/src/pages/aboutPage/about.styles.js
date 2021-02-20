import styled from 'styled-components';
import Image from '../../img/splash.jpg';

export const AboutContainer = styled.div`
font-family: 'Indie Flower', cursive;
font-weight: bold;
 .grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  margin-top: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 3rem;
  gap: 0px 0px;
    grid-template-areas:
  "A B";

  @media screen and (min-width: 800px){
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 1rem;
    margin-bottom: 0rem; 
    }

  .A { 
    grid-area: A;
   
   }
  .B { 
    grid-area: B;
   }

}


   .splash{
    background: url(${Image}) center no-repeat;
    background-size: cover;
    height : 32rem;
    width : 32rem;

    @media screen and (max-width: 800px){
      background-position: 30% 50%;
      height : 19rem;
      width : 20rem;
      margin-top: -4rem;
      margin-right: 2rem;
      }

      
  } 

  .teo{
    height: 16rem;
    width: 16rem;
    border-radius: 50%;
    margin-top: 8rem;
    margin-left: 3.6rem;
    border: 2px solid #000;

    @media screen and (max-width: 800px){
    
      height : 10rem;
      width : 10rem;
      margin-top: 4rem;
      margin-left: 3rem;

      }

   
  }

 

 
`;
  

export const GroupA = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 800px){
    
  font-size: 0.8rem;
  align-items: center;
  text-align: left;
  padding: 1rem; 
  }

`;

export const GroupB = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 800px){

  font-size: 0.5rem;
  align-items: center;
  text-align: center;
  }
`;

export const SubA = styled.div`
display: inline-block
height: 15rem;
width: 100%;
`;

export const SubB = styled.div`
padding: 1.25rem 1.25rem;
height: 9rem;  
width: 100%;

@media screen and (max-width: 800px){
  padding: 0.4rem 0.4rem;
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
line-height: 3.125rem;
padding: 0 2.18rem;
font-size: 0.93rem;
text-transform: uppercase;
font-weight: bolder;
cursor: pointer;
display: flex;
margin-right: auto;
margin-left: auto;
border-radius: 1.5rem;
outline: none;

&:hover {
    background-color: #6ac8ff;
}



@media screen and (max-width: 800px){
  margin-bottom: 10rem; 
}

`;
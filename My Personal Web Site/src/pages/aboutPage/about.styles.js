import styled from 'styled-components';
import Image from '../../img/splash.jpg';

export const AboutContainer = styled.div`
  
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

    @media screen and (max-width: 800px){
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 1rem;
    margin-bottom: 0rem; 
    }

}

.A { 
  grid-area: A;
  padding-left: 5rem;
  padding-right: 5rem;  
 }

.B { 
  
  grid-area: B;

   }

   .splash{
    background: url(${Image}) center no-repeat;
    background-size: cover;
    height : 32rem;
    width : 32rem;

    @media screen and (max-width: 800px){
      background-position: s30% 50%;
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
    margin-left: 9.6rem;
    border: 5px solid #FFFFFF;

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
  text-align: center;
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
padding: 1rem;
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
font-family: 'Open Sans Condensed';
font-weight: bolder;
cursor: pointer;
display: flex;
margin-right: auto;
margin-left: auto;
box-shadow: 5px 5px 15px 5px #000;

&:hover {
    background-color: #000;
    color: white;
    border: 1px solid black;
    box-shadow: 5px 5px 15px 5px #37b5ff;
}
&:focus {
box-shadow: 0 0.1rem 0.6rem #777;
opacity: 0.9;
}

@media screen and (max-width: 800px){
  margin-bottom: 10rem; 
}

`;
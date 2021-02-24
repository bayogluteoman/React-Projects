import styled from 'styled-components';
import Image from '../../img/background.jpg';

export const steps = [

  'Hello... 👋', 500,
  "Is there anyone here? ", 500,
  "Perfect ! It is nice to see you 👌 ", 500,
  "I'm Teoman Bayoglu ", 500,
  "I'm a Computer Engineer student ", 500,
  "It's my first experience to build a web site ",500,
  "Can you give me feedback? ",500,
  "Thank you 👌 ", 50,
  "I'm glad you to visit my web site ", 500,
  
];

export const HomeContainer = styled.div`

.grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 1rem 0rem;
    grid-template-areas:
      "top"
      "bottom";
}
  
.top {
  grid-area: top;
}
  
.bottom { 
  grid-area: bottom;
}
  
margin-top: 0px;
display: flex;
justify-content: center;
align-items: center;
padding: 0 1rem;
height: 90vh;    
background: radial-gradient(circle at center, rgba(0,0,0, 0.40) 15%, rgba(55, 181, 255, 0.45) 85%, white 110%),
url(${Image}) no-repeat center right/cover;

@media screen and (max-width: 800px){
  height: 90vh;
}
   
`;

export const Yazı= styled.div`

font-family: 'Indie Flower', cursive;
  font-size: 2.5rem;
  font-weight: bold;
  -webkit-background-clip: text;
  color: #fff;
  text-shadow: -3px 3px 2px rgba(0, 0, 0, 1);

  @media screen and (max-width: 800px){
    font-size: 1.5rem;
  }
`;



export const LogoItems = styled.div`
  color: #fff;
  font-size: 2rem;
  flex-direction: row;
  display: flex;
  justify-content: center;  
  margin-top:1rem;  
  filter: drop-shadow(-5px 5px 3px rgba(0, 0, 0, 1));


  @media screen and (max-width: 800px){
    font-size: 1.8rem;
    margin-top:1rem; 
    
  }

`;

export const GithubLogo = styled.div`
  font-size: 2rem;
  margin-right: 2rem;

  &:hover {
      color: #1b1f23;
  }
`;

export const LinkedinLogo = styled.div`
  font-size: 2rem;
  margin-right: 2rem;   

  &:hover {
      color:  #0072b1;		
  }
`;

export const TwitterLogo = styled.div`
  font-size: 2rem;
  margin-right: 2rem;   

  &:hover {
      color:rgba(29,161,242,1.00);		
  }
`;

export const InstaLogo = styled.div`
  font-size: 2rem;
  margin-right: 2rem;    

  &:hover {
      color: #c32aa3;		
  }
`;
import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: unset;
    align-items: center;
    text-align: center;
    padding-left: 1.5rem; 
    

    > *:first-child {
      margin-bottom: 50px;
    }

    > *:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }
  }
`;
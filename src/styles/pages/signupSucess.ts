import styled from 'styled-components'

export const SuccessPage = styled.div`
    width: 100vw;
    height: 100vh;
  
    background-color: ${props => props.theme.colors.primary};
  
    display: flex;
  
    align-items: center;
    justify-content: center;
` 
  
  
export const SuccessBackground = styled.div`
    background-image: url('/success-background.svg');
    background-repeat: no-repeat;
    background-size: contain;
  
    width: 90%;
    height: 90%;
  
    display: flex;
    flex-direction: column;
  
    align-items: center;
    justify-content: center;
` 
  
  
export const Title = styled.h2`
    color: ${props => props.theme.colors.buttonText};
    font: 1000 6.2rem Archivo;
    margin-top: 5rem;
    margin-bottom: 1.4rem;
`
  
export const Message = styled.p`
    color: ${props => props.theme.colors.textInPrimary};
    width: 30%;
    text-align: center;
` 
  
export const Button  = styled.button`
   width: 100%;
    max-width: 30rem;
    height: 7.4rem;
    border-radius: 0.8rem;
    margin-top: 3rem;
    
    
    color: ${props => props.theme.colors.buttonText};
    background: ${props => props.theme.colors.secondary};
    border: none;
    transition: background-color 0.2s;
    text-decoration: none;
    :hover {
        background: ${props => props.theme.colors.secondaryDark};
    }
    cursor: pointer;
` 
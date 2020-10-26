import styled from 'styled-components'

export const PageAside = styled.aside`
    display: flex;
    flex: 1;
  
    background: ${props => props.theme.colors.primary};
  
    align-items: center;
    justify-content: center;
  
    padding: 30px;
` 
  
export const BackgroundImage = styled.div`
    background-image: url('/background.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  
    width: 100%;
    height: 90%;
  
    display: flex;
  
    flex-direction: column;
  
    align-items: center;
    justify-content: center;
` 
  
export const Logo = styled.img`
    height: 10rem;
    margin-bottom: 2rem;

` 
  
export const Message = styled.h2`
    color: ${props => props.theme.colors.textInPrimary};
    width: 50%;
    text-align: center;
    font-size: 3.4rem;
` 
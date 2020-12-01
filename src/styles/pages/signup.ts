import styled from 'styled-components'


export const SignupPage = styled.div`
    height: 100vh;
    width: 100vw;
`

export const TopBarContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 1.6rem 0;
`

export const BackLink = styled.a`
    height: 3.2rem;
    cursor: pointer;
    transition: opacity 0.2;
    :hover {
        opacity: 0.6;
    }
`

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 10rem;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 1000px){
        margin-top: 0;
    }
`

export const Title = styled.h1`
    font: 700 3.5rem Poppins;
    color: ${props => props.theme.colors.textTitle};
    margin-bottom: 1.5rem;
`

export const Subtitle = styled.h3`
    font: 400 2.5rem Poppins;
    color: ${props => props.theme.colors.textBase};
    margin-bottom: 1.5rem;
    @media(max-width: 700px){
        display: none;
    }
`


export const Button = styled.button`
    width: 100%;
    max-width: 40rem;
    height: 8.4rem;
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

export const TextButtons = styled.span`
  font: 700 2.0rem Archive;
`

export const InputContainer= styled.div`
        width: 100%;
        max-width: 40rem;

        display: flex;
        flex-direction: column;

        @media(min-width: 1120px){
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            column-gap: 18rem;
}
   
`


import styled from 'styled-components'
import {PageAside} from '../../components/Aside/styles'
export const PageLogin = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    ${PageAside}{
        display: none;
    }

    .login-form {
    background: ${props => props.theme.colors.background};
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }

    .login-form .title-container {
    width: 34rem;
    }

    .login-form .title-container h2 {
    text-align: center;

    margin-top: 15rem;
    margin-bottom: 3rem;

    font: 700 3rem Poppins;
    color: ${props => props.theme.colors.textTitle};
    }

    .login-form .inputs :nth-child(1) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    }

    .login-form .inputs :last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    }

    .sign-link {
    color: ${props => props.theme.colors.primary};
    font: 700 1.5rem Poppins;
    }


    .buttons-container {
    width: 33rem;
    height: 3rem;

    margin-top: 2rem;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    }

    .first-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    }

    .footer {
    width: 33rem;

    margin-top: 13rem;

    display: flex;
    }

    .signup-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    }

    .button {
    width: 41rem;
    height: 5.6rem;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.buttonText} !important;

    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;
    outline: 0;
    }
    button:hover {
    background: ${props => props.theme.colors.secondaryDark};
    }

    @media(min-width: 1120px){
        ${PageAside}{
            display: block;
        }
    }
`
  
import styled from 'styled-components'
import { HeaderContent } from '../../components/Header/styles'

export const TaskFormPage = styled.div`
    height: 100vh;
    width: 100vw;

    ${HeaderContent}{
        margin-bottom: 15rem;
    }

    @media(min-width: 700px){
        max-width: 100vw
    }
`

export const Main = styled.main`
    background-color: ${props => props.theme.colors.boxBase};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 2.5rem;
    overflow: hidden;
`;

export const FieldSet = styled.fieldset`
    border: 0;
    padding: 0 2.4rem;
    margin-top: 6.4rem;
    :first {
        margin-top: 0;
    }
    @media(min-width: 700px) {
        padding: 0 6.4rem;
    }
`;
export const FieldSetData = styled.fieldset`
    border: 0;
    padding: 0 2.4rem;
    margin-top: 6.4rem;
    :first {
        margin-top: 0;
    }

   
    display: flex;
    justify-content: space-between;
    
    @media(min-width: 700px) {
        padding: 0 6.4rem;
    }
`;

export const Legend = styled.legend`
    font: 700 2.4rem Archivo;
    color: ${props => props.theme.colors.textTitle};
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${props => props.theme.colors.lineInWhite};
    > button {
        background: none;
        border: 0;
        color: ${props => props.theme.colors.primary};
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color 0.2;
        :hover {
            color: ${props => props.theme.colors.primaryDark};
        }
    }
`;

export const ScheduleItem = styled.div`
    @media(min-width: 700px) {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;
    }
`;

export const Footer = styled.footer`
    padding: 4rem 2.4rem;
    background: ${props => props.theme.colors.boxFooter};
    border-top: 1px solid ${props => props.theme.colors.lineInWhite};
    margin-top: 6.4rem;
    @media(min-width: 700px) {
        padding: 4.0rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    > p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${props => props.theme.colors.textComplement};
        @media(min-width: 700px) {
            justify-content: space-between;
        }
    }
    > button {
        width: 100%;
        height: 5.6rem;
        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.buttonText};
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
        
        :hover {
            background: ${props => props.theme.colors.secondaryDark};
        }
        @media(min-width: 700px) {
            width: 20rem;
            margin-top: 0;
        }
    }
`;
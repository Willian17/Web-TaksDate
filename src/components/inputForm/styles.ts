import styled from 'styled-components';

export const Input = styled.input`
        background-color: ${props => props.theme.colors.boxFooter};
        border: 1px solid ${props => props.theme.colors.lineInWhite};
        border-radius: 0.8rem;
        width: 100%;
        color: ${props => props.theme.colors.textBase};
        height: 8rem;
        padding: 0rem 2rem;
        padding-top: 1.2rem;
        outline: 0;
        font-weight: 400;

        margin-bottom: 1rem;
        @media(min-width: 1120px){
            margin-bottom: 0.1rem;
            width: 42rem;
        }

        

`
export const Label = styled.label`
        font: 400 1.5rem Poppins;
        color: ${props => props.theme.colors.textLabel};
        position: absolute;
        left: 2rem;
        top: 1.5rem;
`

export const InputFormContainer = styled.div`
    position: relative;
    line-height: 0;

`
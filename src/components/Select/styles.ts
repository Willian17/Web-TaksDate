import styled from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
    line-height: 0;
    label{
        font: 400 2rem Poppins;
        color: ${props => props.theme.colors.textLabel};
        position: absolute;
        left: 2rem;
        top: 2rem;
    }
    :focus-within label{
        font-size: 1.5rem;
        height: calc(100% - 2.4rem);
        top: 1rem;
    }
    select{
        margin-bottom: 1rem;
        border-radius: 0.8rem;
        height: 8rem;
        width: 100%;
        border: 1px solid ${props => props.theme.colors.inputBackground};
        outline: 0;
        background-color: ${props => props.theme.colors.boxFooter};
        font: 400 1.6rem Poppins;
        padding: 0 1.6rem;
        color: ${props => props.theme.colors.textBase};

        @media(min-width: 1120px){
            margin-bottom: 0.5rem;

        }
    }

    @media(min-width: 1120px){
        & + &{
            margin-top: 0;
        }

       
    }
`;
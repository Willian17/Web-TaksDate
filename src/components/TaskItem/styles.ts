import styled from 'styled-components'

export const TaskItemContainer = styled.div`
    background: ${props => props.theme.colors.boxBase};
    border: 1px solid ${props => props.theme.colors.lineInWhite};
    border-radius: 30px;
    margin-top: 1.5rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
    h1{
        color: ${props => props.theme.colors.textTitle};
        padding: 1.5rem 2rem 0.8rem 5rem;
        font: 700 2.2rem;
    }
    h3{
        color: ${props => props.theme.colors.textComplement};
        padding: 0 2rem 3rem 5rem;
        font: 700 2.2rem;
    }
`
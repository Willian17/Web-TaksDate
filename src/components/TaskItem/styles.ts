import styled from 'styled-components'

export const TaskItemContainer = styled.div`
    background: ${props => props.theme.colors.boxBase};
    border: 1px solid ${props => props.theme.colors.lineInWhite};
    border-radius: 30px;
    margin-top: 1.5rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);

    padding: 1.3rem 2rem;

    div.checkbox{
        display: flex;
        align-items: center;
    }

    &.expand{
        min-height: 15rem;
    }
    
    h1{
        color: ${props => props.theme.colors.textTitle};
        font-size: 1.9rem;
        margin-left: 2.6rem;
        margin-right: 2.8rem;
    }

    h1.checked{
        text-decoration: line-through;
        color: ${props => props.theme.colors.textComplement};
    }

    input[type=checkbox] {
        margin-left: 1rem;
        min-width: 2.5rem;
        min-height: 3.7rem;
    }
   
    h3{
        color: ${props => props.theme.colors.textComplement};
        padding: 0 2rem 3rem 5rem;
        font: 700 2.2rem;
    }

    img{
        cursor: pointer;        
    }

    div.delivery-date{
        padding: 2.3rem 0 0.5rem 1.5rem;
    }


    p{
        display: flex;
    }

    p.date{
        margin-bottom: 1.5rem;
    }

    p span {
        margin-left: 1rem;
        color: ${props => props.theme.colors.textComplement};
        font-size: 1.5rem;
    }

    @media(min-width: 1120px){
        padding: 1.5rem 2.2rem;
        h1{
            font-size: 2.5rem;
        }
        input[type=checkbox] {
        min-width: 3rem;
        min-height: 4rem;
        }

        p span{
            font-size: 1.9rem;
        }

    }
    
`


import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.colors.textInPrimary};
    background: ${props => props.theme.colors.primary};
`

export const LogoContainer = styled.div`
  text-align: center;
`
export const LogoImg = styled.img`
  height: 10rem;
`

export const LogoText = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem ;
  margin-top: 0.8rem; 
`

export const HeroImage = styled.img`
  width: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
`
export const Study = styled.a`
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.buttonText};
    background: ${props => props.theme.colors.primaryLighter};
    transition: background-color 0.2s;
    text-decoration: none;
    :hover {
        background: ${props => props.theme.colors.primaryLight};
    }
    cursor: pointer;
`

export const StudyIcon = styled.img`
  margin-right: 0.5rem;
`;

export const GiveClasses = styled.a`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.buttonText};
  background: ${props => props.theme.colors.secondary};
  transition: background-color 0.2s;
  text-decoration: none;
  cursor: pointer;
  :hover{
    background: ${props => props.theme.colors.secondaryDark}
  }
`

export const GiveClassesIcon = styled.img`
  margin-right: 0.5rem;
`

export const TextButtons = styled.span`
  font: 700 2.0rem Archive;
`

export const HomeContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    align-items: center; 

    @media (min-width: 1100px){
      max-width: 1100px;
      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 
      "logo hero"
      "buttons buttons";
    };
    ${LogoContainer}{
      grid-area: logo;
      align-self: center;
      margin: 0;
      text-align: left;
    }
    ${LogoText}{
      text-align: initial;
      font-size: 3.6rem;
    }
    ${HeroImage}{
      grid-area: hero;
      justify-self: end;
    }
    ${ButtonsContainer}{
      grid-area: buttons;
      justify-content: flex-start;
      > a {
        font-size: 2.4rem;
      }
      > a img {
        margin-right: 2.4rem;
      }
    }
`



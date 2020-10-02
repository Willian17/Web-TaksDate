import styled,{ createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    font-size: 50%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next{
    height: 100vh;
  }

  body {
    background: ${props => props.theme.colors.background};
  }

  #__next{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
      font: 500 1.6rem Poppins;
      color: ${props => props.theme.colors.textBase};
  }

  @media (min-width: 700px){
      :root {
          font-size: 80.5%;
      }
  }
`

export const Container = styled.div`
    width: 90vw;
    max-width: 700px;
`;
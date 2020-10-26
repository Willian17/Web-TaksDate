import styled from 'styled-components'

export const PageHome = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  color: ${props => props.theme.colors.textInPrimary};
  background: ${props => props.theme.colors.primary};
  overflow-x: hidden;

header {
  width: 80%;

  max-width: 1366px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem;
}

.user-avatar {
  height: 5rem;

  display: flex;
  align-items: center;
  text-decoration: none;
}

.user-avatar img {
  height: 4rem;
  border-radius: 2rem;
  margin-right: 1rem;
}

.user-avatar h2 {
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: normal;
  color: v${props => props.theme.colors.textInPrimary};
}

header .user-container img {
  height: 4rem;
  border-radius: 50%;
}

.logout-container {
  width: 4rem;
  height: 4rem;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 0.6rem;
  
}

.logout-container .logout-button {
  background: none;
  border: none;
  margin-top: -10px;
  cursor: pointer;
}
#page-landing-content {
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#page-landing-content .logo-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#page-landing-content .logo-container img {
  height: 4.5rem;
  margin-top: 5rem;
}

#page-landing-content .logo-container h2{
  margin-top: 1.5rem;
  font-size: 1.7rem;
  padding-left: 2.3rem;
}

#page-landing-content .hero-image {
  height: 20rem;

  padding: 2rem;

  margin-top: 4rem;
}

footer {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
}

footer .footer-wrapper {
  width: 100%;
  max-width: 1500px;

  display: flex;
  flex-direction: row;
}

footer .welcome-container {
  display: none;
}

footer .welcome-container h1,
h3 {
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: normal;
  color: var(--color-text-base);
}

footer .welcome-container h3 {
  font-weight: bold;
  font-size: 1.8rem;
  color: var(--color-text-title);
}


footer .buttons-container {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-around;
}

footer .buttons-container a {
  width: 15rem;
  height: 15rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items:  center;

  padding: 2rem;

  text-decoration: none;
  color: ${props => props.theme.colors.textInPrimary};
  font-weight: bold;
  font-size: 1.8rem;
}



footer .buttons-container img {
  margin-bottom: 3rem;
}

footer .buttons-container .study {
  margin-left: 5rem;
  margin-right: 2rem;
  background: ${props => props.theme.colors.primaryLighter};
  color:  ${props => props.theme.colors.titleInPrimary};
}

footer .buttons-container .give-classes {
  background: ${props => props.theme.colors.secondary};
  color:  ${props => props.theme.colors.titleInPrimary};
}

@media (min-width: 1150px) { ////////////////////////////// desktop
  height: 100vh;
  overflow: hidden;
  display: flex;
  
  
  #page-landing-content {
    display: flex;
    flex-direction: row;
  }

    
  

  header {
    margin-top: 2rem;
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 80%;
  }

  header .user-container {
    display: flex;
    align-items: center;

    text-decoration: none;
  }

  header .user-container img {
    margin-right: 2rem;
    height: 4rem;
    border-radius: 2rem;
  }

  header .user-container h2 {
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: normal;
    color: var(--color-text-in-primary);
  }

  header .logout-container .logout {
    width: 4rem;
    height: 4rem;

    display: flex;

    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.primaryDark};

    border-radius: 0.6rem;
  }

  header .logout-container .logout img {
    height: 2rem;
    padding: 0;
  }

  #page-landing-content {
    flex: 1.8;
    display: flex;
    width: 80%;

    justify-content: space-between;
  }

  #page-landing-content .logo-container {
    display: flex;
    flex-direction: column;

  }

  #page-landing-content .logo-container img {
    margin-top: 6rem;
    height: 12rem;
  }

  #page-landing-content .logo-container h2 {
    margin-top: 1.5rem;
    width: 65rem;

    color: ${props => props.theme.colors.textInPrimary};
    font-size: 4rem;
  }

  #page-landing-content .hero-image {
    height: auto;
    width: 50%;
    margin-left: 2rem;
  }

  footer {
    flex-direction: row;
    max-height: 300px;
    width: 100%;
    background: ${props => props.theme.colors.background};
  }

  footer .welcome-container {
    display: block;
    margin-left: 10%;
    width: 100rem;

    color: ${props => props.theme.colors.textBase};
    
  }

  footer .welcome-container .title h1{
    font-size: 2.5rem;
  }

  footer .welcome-container .title h2{
    font-size: 2.5rem;
  }

  footer .buttons-container a {
    width: 27rem;
    height: 12rem;

    flex-direction: row;
    align-items: center;

    text-decoration: none;
    color: ${props => props.theme.colors.titleInPrimary};
    font-weight: bold;
    font-size: 2.5rem;
  }

  footer .buttons-container a img {
    margin-right: 3rem;
    margin-top: 3rem;
    margin-left: 1rem;
  }

  footer .buttons-container .study {
    background: ${props => props.theme.colors.primary} ;
    margin-right: 5rem;
  }
}

@media (min-height: 900px) {
 #page-landing-content {
    align-items: center;
    justify-content: space-between;
  }

 #page-landing-content .logo-container img {
    margin-top: 0;
    height: 15rem;
  }

 #page-landing-content .logo-container h2 {
    font-size: 3rem;
  }

 #page-landing-content img {
    height: 40rem;
  }
}
`

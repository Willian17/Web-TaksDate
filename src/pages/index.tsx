import React from 'react'
import Link from 'next/link'

import { 
  Container,
  HomeContent,
  LogoContainer,
  LogoImg,
  LogoText,
  HeroImage,
  ButtonsContainer,
  Study,
  StudyIcon,
  GiveClasses,
  GiveClassesIcon,
  TextButtons

} from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
    <Container>
      <HomeContent>
        <LogoContainer>
            <LogoImg src="/logo.svg" alt="logo"/>
            <LogoText>Sua plataforma de estudo online.</LogoText>
        </LogoContainer>

        <HeroImage src="/landing.svg" alt="landing"/>
  
        <ButtonsContainer className="buttons-container">
            <Link href="/task-list">
              <Study>
                <StudyIcon src="/icons/study.svg" alt="estudar"/> 
                <TextButtons>Ver as tarefas</TextButtons>
              </Study>
            </Link>

            <Link href="/task-form">
              <GiveClasses>
                  <GiveClassesIcon src="/icons/classes.png" alt="aulas"/>
                  <TextButtons>Criar tarefas</TextButtons>
              </GiveClasses>
            </Link>    
        </ButtonsContainer>
            </HomeContent>
    </Container>
  )
}

export default Home

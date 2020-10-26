import React from 'react';
import {useRouter} from 'next/router'

import {
  SuccessPage,
  SuccessBackground,
  Title,
  Message,
  Button
} from '../styles/pages/signupSucess'

const SignUpSucess: React.FC = () => {
  const router = useRouter()
  return (
    <SuccessPage>
      <SuccessBackground>
        <img src='/icons/success-check-icon.svg' alt="Ícone de check" />
        <Title>Cadastro concluído</Title>
        <Message>
          Agora você faz parte da plataforma da TasksDate. <br/> 
          Tenha uma ótima experiência.
        </Message>
        <Button onClick={()=> router.push('/signin') }>Fazer login</Button>
      </SuccessBackground>
    </SuccessPage>
  );
};

export default SignUpSucess;
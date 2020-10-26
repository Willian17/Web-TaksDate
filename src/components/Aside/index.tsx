import React from 'react';

import {
    PageAside,
    BackgroundImage,
    Logo,
    Message
} from './styles';


const Aside: React.FC = () => {
  return (
    <PageAside>
      <BackgroundImage>
        <Logo src='/logo.svg' alt="proffy-logo" />
        <Message>Sua plataforma de organização de estudos online</Message>
      </BackgroundImage>
    </PageAside>
  );
};

export default Aside;
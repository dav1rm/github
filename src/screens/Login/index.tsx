import React from 'react';
import logo from '../../assets/images/logo.png';

import { Container, Image, Title, Description } from './styles';

function Login() {
  return (
    <Container>
      <Image source={logo} />
      <Title>Buscar usuário</Title>
      <Description>Crie sua conta através do seu usuário do GitHub</Description>
    </Container>
  );
}

export default Login;

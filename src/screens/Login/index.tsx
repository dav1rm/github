import React from 'react';
import logo from '../../assets/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Form,
  Image,
  Title,
  Description,
  Label,
  Separator,
} from './styles';

function Login() {
  return (
    <Container>
      <Content>
        <Image source={logo} />

        <Form>
          <Title>Buscar usuário</Title>

          <Separator height={10} />

          <Description>
            Crie sua conta através do seu usuário do GitHub
          </Description>

          <Separator height={32} />

          <Input
            icon="account-circle"
            onChangeText={() => null}
            placeholder="@username"
          />

          <Separator height={24} />

          <Button label="Cadastrar" onPress={() => null} />
        </Form>

        <Label>
          Termos de <Label underline>política</Label> e{' '}
          <Label underline>privacidade</Label>
        </Label>
      </Content>
    </Container>
  );
}

export default Login;

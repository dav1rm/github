import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import logo from '../../assets/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import { useStorage } from '../../hooks/storage';
import { LoginScreenProp } from '../../routes/types';
import { GET_USER_INFO } from '../../services/graphql/queries';
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
  const [username, setUsername] = useState('');
  const { updateUsers, users } = useStorage();
  const navigation = useNavigation<LoginScreenProp>();
  const [getUserInfo, { data, loading, error }] = useLazyQuery(GET_USER_INFO);

  const description = navigation.canGoBack()
    ? 'Adicione seus novos usuários do GitHub'
    : 'Crie sua conta através do seu usuário do GitHub';

  useEffect(() => {
    if (!loading && !error && !!data) {
      if (data?.user) {
        updateUsers([...users, data?.user]);

        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }
    }
  }, [data, error, loading, navigation, updateUsers, users]);

  async function handleSearchUser() {
    if (!username) {
      return;
    }

    await getUserInfo({ variables: { username } });
  }

  return (
    <Container>
      <Content>
        <Image source={logo} />

        <Form>
          <Title>Buscar usuário</Title>

          <Separator height={10} />

          <Description>{description}</Description>

          <Separator height={32} />

          <Input
            icon="account-circle"
            value={username}
            onChangeText={text => setUsername(text)}
            placeholder="@username"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Separator height={24} />

          <Button
            label={loading ? 'Loading' : 'Cadastrar'}
            onPress={handleSearchUser}
          />
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

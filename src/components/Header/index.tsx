import React from 'react';
import { StatusBar } from 'react-native';
import logo from '../../assets/images/logo.png';
import Button from '../Button';
import { Container, Image } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Container>
        <Image source={logo} />
        <Button height={32} label="Adicionar novo" onPress={() => null} />
      </Container>
    </>
  );
};

export default Header;

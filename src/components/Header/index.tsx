import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import logo from '../../assets/images/logo.png';
import Button from '../Button';
import { Container, Image } from './styles';

const Header: React.FC<NativeStackHeaderProps> = () => {
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

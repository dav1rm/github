import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import logo from '../../assets/images/logo.png';
import Button from '../Button';
import { Center, Container, Image, Avatar, Left, Right } from './styles';
import ActionButton from '../ActionButton';

const Header: React.FC<NativeStackHeaderProps> = ({ back, navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Container>
        <Left>
          {back ? (
            <ActionButton
              onPress={navigation.goBack}
              iconName="arrow-back"
              iconSize={30}
              height={32}
              width={32}
              bgColor="transparent"
              iconColor="#000"
            />
          ) : (
            <Image source={logo} />
          )}
        </Left>
        <Center />
        <Right>
          <Avatar
            source={{
              uri: 'https://avatars.githubusercontent.com/u/6731139?v=4',
            }}
          />
          {/* <Button height={32} label="Adicionar novo" onPress={() => null} /> */}
        </Right>
      </Container>
    </>
  );
};

export default Header;

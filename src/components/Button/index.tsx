import React from 'react';
import { Container, TextButton } from './styles';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <Container onPress={onPress}>
      <TextButton>{label}</TextButton>
    </Container>
  );
};

export default Button;

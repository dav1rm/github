import React from 'react';
import { Container, TextButton } from './styles';

interface ButtonProps {
  label: string;
  height?: number;
  light?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, height, light, onPress }) => {
  return (
    <Container height={height} light={light} onPress={onPress}>
      <TextButton light={light}>{label}</TextButton>
    </Container>
  );
};

export default Button;

import React from 'react';
import { Container, TextButton } from './styles';

interface ButtonProps {
  label: string;
  height?: number;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, height, onPress }) => {
  return (
    <Container height={height} onPress={onPress}>
      <TextButton>{label}</TextButton>
    </Container>
  );
};

export default Button;

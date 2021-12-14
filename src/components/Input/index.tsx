import React from 'react';
import { Container, TextInput, IconInput } from './styles';

interface InputProps {
  onChangeText: (text: string) => void;
  value?: string;
  placeholder?: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <Container>
      {icon && <IconInput name={icon} size={24} color="#E5E5E5" />}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </Container>
  );
};

export default Input;

import React from 'react';
import { Container, TextInput, IconInput } from './styles';

interface InputProps {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  icon?: string;
  background?: string;
  hasShadow?: boolean;
}

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  onChangeText,
  value,
  background,
  hasShadow,
}) => {
  return (
    <Container background={background} hasShadow={hasShadow}>
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

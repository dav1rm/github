import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, StyledTextInput, IconInput } from './styles';

interface InputProps extends TextInputProps {
  icon?: string;
  background?: string;
  hasShadow?: boolean;
}

const Input: React.FC<InputProps> = ({
  icon,
  background,
  hasShadow,
  ...rest
}) => {
  return (
    <Container background={background} hasShadow={hasShadow}>
      {icon && <IconInput name={icon} size={24} color="#E5E5E5" />}
      <StyledTextInput {...rest} />
    </Container>
  );
};

export default Input;

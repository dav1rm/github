import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';

interface ContainerProps {
  background?: string;
  hasShadow?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  max-height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 0 8px;
  width: 100%;
  background: ${props => props.background ?? 'transparent'};
  ${({ hasShadow }) =>
    hasShadow &&
    css`
      border: none;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    `};
`;

export const StyledTextInput = styled(TextInput)`
  padding: 0;
  flex: 1;
  font-family: 'Mulish-Regular';
  font-size: 14px;
  color: #000;
`;

export const IconInput = styled(Icon)`
  margin: 8px;
`;

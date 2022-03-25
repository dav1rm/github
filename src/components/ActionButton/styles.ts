import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps extends TouchableOpacityProps {
  height?: number;
  width?: number;
  color?: string;
  rounded?: boolean;
  hasShadow?: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: ${({ width }) => width ?? 24}px;
  height: ${({ height }) => height ?? 24}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color ?? '#e8e8e8'};
  border-radius: ${({ rounded }) => (rounded ? 100 : 4)}px;
  ${({ hasShadow }) =>
    hasShadow &&
    css`
      border: none;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    `};
`;

export const TextButton = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`;

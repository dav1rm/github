import styled from 'styled-components/native';

interface ContainerProps {
  height?: number;
  width?: number;
  color?: string;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ContainerProps>`
  width: ${({ width }) => width ?? 24}px;
  height: ${({ height }) => height ?? 24}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color ?? '#e8e8e8'};
  border-radius: 100px;
`;

export const TextButton = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`;

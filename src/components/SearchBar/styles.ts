import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 8px 16px;
  padding-bottom: 0;
  align-items: center;
`;

interface SeparatorProps {
  height?: number;
  width?: number;
}

export const Separator = styled.View<SeparatorProps>`
  height: ${({ height }) => height || 24}px;
  width: ${({ width }) => width || 24}px;
`;

import styled from 'styled-components/native';

export const Container = styled.View``;

export const BarContainer = styled.View`
  flex-direction: row;
  padding: 8px 16px;
  padding-bottom: 0;
  align-items: center;
`;

export const InputContainer = styled.View`
  flex: 1;
`;

export const TagsContainer = styled.ScrollView`
  padding: 8px 16px;
  padding-bottom: 0;
  margin: 8px 0;
`;

interface SeparatorProps {
  height?: number;
  width?: number;
}

export const Separator = styled.View<SeparatorProps>`
  height: ${({ height }) => height || 24}px;
  width: ${({ width }) => width || 24}px;
`;

import styled from 'styled-components/native';

interface ContainerProps {
  small?: boolean;
}
export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  padding: 3px 16px;
  height: ${({ small }) => (small ? 22 : 26)}px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  margin-right: 8px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
`;

interface TextProps {
  small?: boolean;
}
export const Text = styled.Text<TextProps>`
  font-family: 'Mulish-Regular';
  font-size: ${({ small }) => (small ? 12 : 16)}px;
  line-height: ${({ small }) => (small ? 15 : 20)}px;
`;

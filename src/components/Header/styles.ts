import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  height: 72px;
  padding: 16px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  height: 40px;
  width: 100px;
`;

export const Avatar = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 100px;
`;

export const Left = styled.View``;

export const Center = styled.View``;

export const Right = styled.View``;

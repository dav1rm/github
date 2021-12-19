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

export const TextButton = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`;

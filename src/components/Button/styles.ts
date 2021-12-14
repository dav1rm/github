import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  height: 40px;
  border-radius: 100px;
  background: #000;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`;

export const IconInput = styled(Icon)`
  margin: 0 8px;
`;

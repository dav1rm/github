import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex-direction: row;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 8px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Mulish-Regular';
`;

export const IconInput = styled(Icon)`
  margin: 0 8px;
`;

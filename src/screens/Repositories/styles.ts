import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f8f8f8;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 16, paddingVertical: 8 },
})`
  flex: 1;
`;

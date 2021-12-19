import React from 'react';

import UserCard from '../../components/UserCard';
import { Separator } from '../Login/styles';
import { Container, FlatList } from './styles';

function Users() {
  const usersMock = [
    {
      id: 1,
      avatar_url: 'https://avatars.githubusercontent.com/u/6731139?v=4',
      name: 'John Doe Santos',
      username: '@johndoesantos',
      company: 'GO.K Digital',
      address: 'São Paulo, Brazil',
      stars: 2,
    },
    {
      id: 2,
      avatar_url: 'https://avatars.githubusercontent.com/u/6731139?v=4',
      name: 'John Doe Santos',
      username: '@johndoesantos',
      company: 'GO.K Digital',
      address: 'São Paulo, Brazil',
      stars: 2,
    },
    {
      id: 3,
      avatar_url: 'https://avatars.githubusercontent.com/u/6731139?v=4',
      name: 'John Doe Santos',
      username: '@johndoesantos',
      company: 'GO.K Digital',
      address: 'São Paulo, Brazil',
      stars: 2,
    },
  ];

  return (
    <Container>
      <FlatList
        data={usersMock}
        ItemSeparatorComponent={() => <Separator height={8} />}
        renderItem={({ item }) => <UserCard user={item} onPress={() => null} />}
      />
    </Container>
  );
}

export default Users;

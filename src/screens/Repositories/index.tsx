import React from 'react';
import RepositoryCard from '../../components/RepositoryCard';

import { Separator } from '../Login/styles';
import { Container, FlatList } from './styles';

function Repositories() {
  const RepositoriesMock = [
    {
      id: 1,
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      language: 'React Native',
      stars: 2,
      users: 5,
      lastCommit: new Date(),
      tags: ['JavaScript', 'Front End'],
    },
    {
      id: 2,
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      language: 'React Native',
      stars: 2,
      users: 5,
      lastCommit: new Date(),
      tags: ['JavaScript', 'Front End'],
    },
    {
      id: 3,
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      language: 'React Native',
      stars: 2,
      users: 5,
      lastCommit: new Date(),
      tags: ['JavaScript', 'Front End'],
    },
  ];

  return (
    <Container>
      <FlatList
        data={RepositoriesMock}
        ItemSeparatorComponent={() => <Separator height={8} />}
        renderItem={({ item }) => (
          <RepositoryCard repo={item} onPress={() => null} />
        )}
      />
    </Container>
  );
}

export default Repositories;

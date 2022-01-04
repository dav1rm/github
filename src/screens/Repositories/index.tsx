import React, { useState } from 'react';
import RepositoryCard from '../../components/RepositoryCard';
import SearchBar from '../../components/SearchBar';
import TagsModal from '../../components/TagsModal';

import { Separator } from '../Login/styles';
import { Container, FlatList } from './styles';

function Repositories() {
  const [modalVisible, setModalVisible] = useState(false);

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
      <SearchBar />
      <FlatList
        data={RepositoriesMock}
        ItemSeparatorComponent={() => <Separator height={8} />}
        renderItem={({ item }) => (
          <RepositoryCard repo={item} onPress={() => setModalVisible(true)} />
        )}
      />
      <TagsModal
        visible={modalVisible}
        title="Adicionar tags"
        onRequestClose={() => setModalVisible(false)}
      />
    </Container>
  );
}

export default Repositories;

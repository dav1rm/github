import React from 'react';
import UserCard from '../../components/UserCard';
import { Separator } from '../Login/styles';
import { Container, UsersList } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useStorage } from '../../hooks/storage';
import { usersScreenProp } from '../../routes/types';
import Loading from '../../components/Loading';
import { User } from '../../services/graphql/queries/getUserInfo';

function Users() {
  const { users, loading, updateUsers } = useStorage();
  const navigation = useNavigation<usersScreenProp>();

  if (loading) {
    return <Loading />;
  }

  const handleOpenRepositories = (user: User) => {
    navigation.navigate('Repositories', { user });
  };

  const handleRemoveUser = (userId: string) => {
    const newUsers = users.filter(user => user.id !== userId);

    updateUsers(newUsers);
  };

  return (
    <Container>
      <UsersList
        data={users}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        ItemSeparatorComponent={() => <Separator height={8} />}
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => handleOpenRepositories(item)}
            onDeletePress={() => handleRemoveUser(item.id)}
          />
        )}
      />
    </Container>
  );
}

export default Users;

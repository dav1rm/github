import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header';
import UsersScreen from '../screens/Users';
import RepositoriesScreen from '../screens/Repositories';
import AddUserScreen from '../screens/Login';

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={UsersScreen}
        options={{ header: props => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Repositories"
        component={RepositoriesScreen}
        options={{ header: props => <Header {...props} /> }}
      />
      <Stack.Screen
        name="AddUser"
        component={AddUserScreen}
        options={{ header: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

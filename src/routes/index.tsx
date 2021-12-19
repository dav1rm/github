import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersScreen from '../screens/Users';
import RepositoriesScreen from '../screens/Repositories';
import LoginScreen from '../screens/Login';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="RepositoriesScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{ header: props => <Header {...props} /> }}
      />
      <Stack.Screen
        name="RepositoriesScreen"
        component={RepositoriesScreen}
        options={{ header: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
}

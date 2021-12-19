import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersScreen from '../screens/Users';
import LoginScreen from '../screens/Login';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
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
    </Stack.Navigator>
  );
}

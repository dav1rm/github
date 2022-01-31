import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header';
import LoginScreen from '../screens/Login';

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/Login';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

import React from 'react';
import {Account, SignIn} from '../../../screens/Account';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AccountScreen" component={Account} />
      <Stack.Screen name="SignInScreen" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AccountStack;

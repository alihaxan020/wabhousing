import {View, Text} from 'react-native';
import React from 'react';
import {Splash} from '../../screens/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from '../TabNavigation';
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Tabs" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default RootStack;

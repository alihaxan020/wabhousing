import React from 'react';
import {Houses} from '../../../screens/Houses';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HousesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HousesScreen" component={Houses} />
    </Stack.Navigator>
  );
};

export default HousesStack;

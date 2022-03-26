import React from 'react';
import {Notifications} from '../../../screens/Notifications';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NotificationsScreen" component={Notifications} />
    </Stack.Navigator>
  );
};

export default NotificationStack;

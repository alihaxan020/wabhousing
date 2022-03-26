import React from 'react';
import {Bookings} from '../../../screens/Bookings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookingsScreen" component={Bookings} />
    </Stack.Navigator>
  );
};

export default BookingStack;

import React from 'react';
import {Home} from '../../../screens/Home';
import HotelDetail from '../../../screens/HotelDetails';
import Checkout from '../../stacks/CheckoutStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="HotelDetailsScreen" component={HotelDetail} />
      <Stack.Screen name="CheckoutStack" component={Checkout} />
    </Stack.Navigator>
  );
};

export default HomeStack;

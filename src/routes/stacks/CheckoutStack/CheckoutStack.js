import React from 'react';
import Checkout from '../../../screens/Checkout';
import BookingReview from '../../../screens/Checkout/BookingReview';
//PaymentConfirmationScreen
import PaymentConfirmation from '../../../screens/Checkout/PaymentConfirmation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CheckoutScreen" component={Checkout} />
      <Stack.Screen name="BookingReviewScreen" component={BookingReview} />
      <Stack.Screen
        name="PaymentConfirmationScreen"
        component={PaymentConfirmation}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

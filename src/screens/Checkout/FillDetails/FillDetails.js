import * as React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {hotelDetails} from '../../../data/stubs/hotel-stubs';
import BookingSummary from './BookingSummary';
import styles from './styles';
import ListRowItem from '../../../components/elements/List/ListRowItem';
import {Button, Container} from '../../../components/elements';
import ContactDetails from './ContactDetails';
import SpecialRequest from './SpecialRequest';
import PriceDetails from './PriceDetails';
import {useNavigation} from '@react-navigation/core';
import {icons} from '../../../../constants';
const BookStep = () => {
  const {navigate} = useNavigation();

  const onContinueButtonPress = () => {
    navigate('BookingReviewScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        enabled>
        <BookingSummary data={hotelDetails} />
        <Container>
          <ListRowItem
            title="Logged in as John Doe"
            subTitle="via Logged in with Facebook"
            containerStyle={styles.loginInfoRow}
            leftElement={<Image source={icons.avatar} style={styles.avatar} />}
          />
        </Container>
        <ContactDetails />
        <SpecialRequest />
        <PriceDetails />
        <View style={styles.continueButtonContainer}>
          <Button
            isFullWidth
            value="Continue"
            onPress={onContinueButtonPress}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default BookStep;

import {Text} from '../../../components/elements';
import * as React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PriceDetails from './PriceDetails';
import CheckinInfo from './CheckinInfo';
import GuestDetails from './GuestDetails';
import RoomInfo from './RoomInfo';
import RoomPolicy from './RoomPolicy';
import styles from './styles';

const BookingReview = () => {
  return (
    <ScrollView>
      <View style={styles.warnInfoContainer}>
        <Text isPrimary>
          Please review your booking details before continuing to payment
        </Text>
      </View>
      <CheckinInfo />
      <RoomInfo />
      <RoomPolicy />
      <GuestDetails />
      <PriceDetails />
    </ScrollView>
  );
};

export default BookingReview;

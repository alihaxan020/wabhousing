import * as React from 'react';
import {View} from 'react-native';
import {Container, Divider, Icon, Text} from '../../../../components/elements';
import styles from './styles';

const BookingSummary = ({data}) => {
  return (
    <Container hasPadding style={styles.root}>
      <Text
        isHeadingTitle
        isBold
        numberOfLines={1}
        leftIcon={
          <Icon
            useIonicons
            name="business"
            size={20}
            style={styles.titleLeftIcon}
          />
        }>
        {data.name}
      </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.timeLabel}>Check-in</Text>
        <Text style={styles.dateTimeValue}>Sat, 20 Feb 2021 (14:00)</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeLabel}>Check-out</Text>
        <Text style={styles.dateTimeValue}>Sat, 20 Feb 2021 (14:00)</Text>
      </View>
      <Divider />
      <View>
        <Text isHeadingTitle>(1x) Superior Twin Room</Text>
        <Text isSecondary hasMargin>
          2 single bed
        </Text>
        <Text isSecondary hasMargin>
          2 Adults(s) / room
        </Text>
      </View>
      <Divider />
      <View>
        <Text
          leftIcon={
            <Icon useIonicons name="md-close-circle-outline" size={18} />
          }>
          Non-refundable
        </Text>
        <Text
          hasMargin
          leftIcon={
            <Icon useIonicons name="md-close-circle-outline" size={18} />
          }>
          Non-reschedulable
        </Text>
      </View>
    </Container>
  );
};

export default BookingSummary;

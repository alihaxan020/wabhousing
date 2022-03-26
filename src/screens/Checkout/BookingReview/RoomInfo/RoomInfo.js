import * as React from 'react';
import {Image, View} from 'react-native';
import {Container, Section, Text} from '../../../../components/elements';
import styles from './styles';
import {icons} from '../../../../../constants';

const RoomInfo = () => {
  return (
    <Section title="(1x) Superior Twin Room">
      <Container style={styles.container}>
        <View style={styles.infoRow}>
          <View style={styles.infoLeftCol}>
            <Text>Bed Type</Text>
          </View>
          <View style={styles.infoRightCol}>
            <Text>2 single bed</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoLeftCol}>
            <Text>Guests</Text>
          </View>
          <View style={styles.infoRightCol}>
            <Text>2 guests/room</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoLeftCol}>
            <Image source={icons.hotelRoom1} style={styles.roomThumbnail} />
          </View>
          <View style={styles.infoRightCol}>
            <Text
              isPrimary
              leftIcon={
                <Image
                  source={icons.restaurant}
                  style={styles.facilitiesIcon}
                />
              }>
              Free Breakfast
            </Text>
            <Text
              isPrimary
              hasMargin
              leftIcon={
                <Image source={icons.wifi} style={styles.facilitiesIcon} />
              }>
              Free Wifi
            </Text>
          </View>
        </View>
      </Container>
    </Section>
  );
};

export default RoomInfo;

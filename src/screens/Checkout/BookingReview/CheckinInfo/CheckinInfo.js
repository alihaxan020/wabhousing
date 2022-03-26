import * as React from 'react';
import {Image, View} from 'react-native';
import {Container, Section, Text} from '../../../../components/elements';
import styles from './styles';
import {icons} from '../../../../../constants';
const RoomInfo = () => {
  return (
    <Section title="Terracotta Hotel & Resort Dalat">
      <Container style={styles.container}>
        <View>
          <Text isSecondary>Check in</Text>
          <Text isBold hasMargin>
            Sat, 20 Feb, 2021
          </Text>
          <Text isSecondary hasMargin>
            14:00
          </Text>
        </View>
        <View style={styles.nightContainer}>
          <Image source={icons.moon} style={styles.nightIcon} />
          <Text isSecondary>2 night(s)</Text>
        </View>
        <View style={styles.checkoutInfoContainer}>
          <Text isSecondary>Check out</Text>
          <Text isBold hasMargin>
            Fri, 25 Feb, 2021
          </Text>
          <Text isSecondary hasMargin>
            14:00
          </Text>
        </View>
      </Container>
    </Section>
  );
};

export default RoomInfo;

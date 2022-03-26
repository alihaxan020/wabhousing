import * as React from 'react';
import {View} from 'react-native';
import {
  Button,
  Container,
  Section,
  Text,
} from '../../../../components/elements';
import ListRowItem from '../../../../components/elements/List/ListRowItem';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PriceDetails = () => {
  const {navigate} = useNavigation();

  const onContinueButtonPress = () => {
    navigate('PaymentConfirmationScreen');
  };

  return (
    <Section title="Price Details">
      <Container style={styles.expandedContainer}>
        <ListRowItem
          subTitle="(1x) Superior Twin Room"
          rightElement={
            <Text numberOfLines={1} isSecondary>
              $1.318.275
            </Text>
          }
          containerStyle={styles.expandedRowContainerStyle}
          rightContainerStyle={styles.rightElementContainerStyle}
        />
        <ListRowItem
          subTitle="Accommodation Fee"
          rightElement={<Text numberOfLines={1}>Included</Text>}
          containerStyle={styles.expandedRowContainerStyle}
          rightContainerStyle={styles.rightElementContainerStyle}
        />
        <ListRowItem
          title="Total"
          rightElement={
            <Text numberOfLines={1} isBold isPrimary>
              $1.318.275
            </Text>
          }
          containerStyle={styles.expandedRowContainerStyle}
          rightContainerStyle={styles.rightElementContainerStyle}
        />
        <View style={styles.continueButtonContainer}>
          <Button
            isFullWidth
            value="Continue to Payment"
            onPress={onContinueButtonPress}
          />
        </View>
      </Container>
    </Section>
  );
};

export default PriceDetails;

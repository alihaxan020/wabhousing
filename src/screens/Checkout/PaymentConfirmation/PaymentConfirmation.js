import {Button, Icon, Text} from '../../../components/elements';
import * as React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AdditionalOptions from './AdditionalOptions';
import CardInformation from './CardInformation';
import PriceDetails from './PriceDetails';
import styles from './styles';
import SuccessBookingModal from './SuccessBookingModal';

const PaymentConfirmation = () => {
  const [isSuccessBookingModalVisible, setIsSuccessBookingModalVisible] =
    React.useState(false);

  const onContinueButtonPress = () => {
    setIsSuccessBookingModalVisible(true);
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <View>
          <Text isCenter isBold>
            Terracotta Hotel & Resort Dalat
          </Text>
          <Text isSecondary isCenter>
            20 Feb 2021, 1 night(s)
          </Text>
          <Text
            isPrimary
            isCenter
            hasMargin
            leftIcon={<Icon name="clock" isPrimary />}>
            Complete your payment within 44:37
          </Text>
        </View>
      </View>
      <CardInformation />
      <AdditionalOptions />
      <PriceDetails />
      <View style={styles.continueButtonContainer}>
        <Button
          isFullWidth
          value="Pay with My Cards"
          onPress={onContinueButtonPress}
        />
      </View>
      <SuccessBookingModal
        isVisible={isSuccessBookingModalVisible}
        setIsVisble={setIsSuccessBookingModalVisible}
      />
    </ScrollView>
  );
};

export default PaymentConfirmation;

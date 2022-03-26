import * as React from 'react';
import {
  Button,
  Container,
  Icon,
  Section,
  Text,
} from '../../../../components/elements';
import ListRowItem from '../../../../components/elements/List/ListRowItem';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const AdditionalOptions = () => {
  const {navigate} = useNavigation();

  const onAddCouponButtonPress = () => {
    navigate('PromotionScreen');
  };

  return (
    <Section title="Additional Options">
      <Container>
        <ListRowItem
          title="Coupon"
          leftElement={
            <Icon useMaterialIcons name="ticket-percent" size={25} />
          }
          rightElement={
            <Button isTransparent onPress={onAddCouponButtonPress}>
              <Text isBold isPrimary>
                Add
              </Text>
            </Button>
          }
          containerStyle={styles.rowContainerStyle}
          rightContainerStyle={styles.rightElementContainerStyle}
        />
      </Container>
      <Container>
        <ListRowItem
          title="389 Points"
          leftElement={<Icon name="coins" size={20} />}
          rightElement={
            <Text isBold isPrimary>
              Redeem
            </Text>
          }
          containerStyle={styles.rowContainerStyle}
          rightContainerStyle={styles.rightElementContainerStyle}
        />
      </Container>
    </Section>
  );
};

export default AdditionalOptions;

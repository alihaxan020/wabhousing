import * as React from 'react';
import {Container, Icon, Text} from '../../../../components/elements';
import ListRowItem from '../../../../components/elements/List/ListRowItem';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const CardInformation = () => {
  const {navigate} = useNavigation();

  const onListItemPress = () => {
    navigate('PaymentMethodScreen');
  };

  return (
    <Container>
      <ListRowItem
        title="**** 3690"
        leftElement={<Icon name="cc-visa" size={22} />}
        rightElement={
          <Text isBold isPrimary>
            Change
          </Text>
        }
        containerStyle={styles.rowContainerStyle}
        rightContainerStyle={styles.rightElementContainerStyle}
        onPress={onListItemPress}
      />
    </Container>
  );
};
export default CardInformation;

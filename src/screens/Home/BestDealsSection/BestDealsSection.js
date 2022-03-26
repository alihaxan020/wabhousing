import * as React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HotelInfoRow} from '../../../components/common';
import {Section, Text} from '../../../components/elements';
import {mostSearchedHotelStubs} from '../../../data/stubs/hotel-stubs';
import styles from './styles';

const BestDealsSection = () => {
  const navigation = useNavigation();

  const _onButtonActionPress = () => {
    // navigation.navigate('HotelListScreen', {title: 'Best Deals'});
    console.log('HotelListScreen, {title: Best Deals}');
  };

  const _onItemPress = name => {
    return () => {
      //   navigation.navigate('HotelDetailsScreen', {title: name});
      console.log('HotelDetailsScreen, {title: name}');
    };
  };

  return (
    <Section
      title="Best Deals"
      actionButtonText="View more"
      onButtonActionPress={_onButtonActionPress}>
      <View style={styles.container}>
        {mostSearchedHotelStubs.map(item => {
          const {
            id,
            image,
            name,
            location,
            price,
            ratings,
            bed,
            bath,
            guestes,
          } = item;
          return (
            <HotelInfoRow
              key={id}
              name={name}
              description={location}
              image={image}
              price={price}
              ratings={ratings}
              bed={bed}
              bath={bath}
              guestes={guestes}
              extraInfo={<Text isSecondary>10% off until Apr 14th</Text>}
              containerStyle={styles.rowItemContainer}
              onPress={_onItemPress(name)}
            />
          );
        })}
      </View>
    </Section>
  );
};

export default BestDealsSection;

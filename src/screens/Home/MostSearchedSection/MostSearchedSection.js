import * as React from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Section, Carousel, Icon, Text} from '../../../components/elements';
import {mostSearchedHotelStubs} from '../../../data/stubs/hotel-stubs';
import {HotelInfoRow} from '../../../components/common';

const MostSearchedSection = () => {
  const navigation = useNavigation();

  const _onButtonActionPress = () => {
    navigation.navigate('HotelListScreen');
    // console.log("'HotelListScreen', {title: 'Most Searched Hotels'}");
  };

  const _onItemPress = name => {
    return () => {
      navigation.navigate('HotelDetailsScreen');
      // console.log("'HotelDetailsScreen', {title: name}");
    };
  };

  return (
    <Section
      title="Most Searched Hotels"
      actionButtonText="View more"
      onButtonActionPress={_onButtonActionPress}>
      <Carousel
        data={mostSearchedHotelStubs}
        hasParallaxImages
        itemWidth={Dimensions.get('window').width - 15}
        renderContent={item => {
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
              onPress={_onItemPress(name)}
            />
          );
        }}
      />
    </Section>
  );
};

export default MostSearchedSection;

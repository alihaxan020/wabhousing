import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Carousel, Section, Text, Touchable} from '../../../components/elements';
import {Dimensions, Image, View} from 'react-native';
import {popularPlaceStubs} from '../../../data/stubs/hotel-stubs';
import styles from './styles';

const TopTrendingPlaceSection = () => {
  const navigation = useNavigation();

  const _onButtonActionPress = () => {
    // navigation.navigate('HotelListScreen', {title: 'Popular Near You'});
    console.log('I am in TopTrendingPlaceSection.js');
  };

  const _onItemPress = name => {
    return () => {
      //   navigation.navigate('HotelDetailsScreen', {title: name});
      console.log('I am in TopTrendingPlaceSection.js');
    };
  };

  return (
    <Section
      title="Popular Destinations"
      actionButtonText="View more"
      onButtonActionPress={_onButtonActionPress}>
      <Carousel
        data={popularPlaceStubs}
        itemWidth={Dimensions.get('window').width - 100}
        renderContent={item => {
          const {id, image, name} = item;
          return (
            <Touchable onPress={_onItemPress(name)}>
              <View key={id} style={styles.card}>
                <Image source={image} style={styles.image} resizeMode="cover" />
                <View style={styles.imageOverlay} />
                <Text isBold isWhite style={styles.name} numberOfLines={1}>
                  {name}
                </Text>
              </View>
            </Touchable>
          );
        }}
      />
    </Section>
  );
};

export default TopTrendingPlaceSection;

import * as React from 'react';
import {
  Button,
  Carousel,
  Container,
  Divider,
  Text,
} from '../../../components/elements';
import {Dimensions, Image, View} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../../../constants';
const RoomInfo = ({room, isLast}) => {
  const {images, name, area, descriptions, facilities} = room;
  const {navigate} = useNavigation();

  const onChooseButtonPress = () => {
    navigate('CheckoutStack');
  };

  return (
    <Container>
      <View>
        <Carousel
          data={images}
          enableSnap
          hasParallaxImages
          hasPagination
          itemWidth={Dimensions.get('window').width}
          renderContent={(image, index, parallaxProps) => {
            return (
              <View key={index} style={styles.carouselItem}>
                <ParallaxImage
                  parallaxFactor={0.4}
                  source={image}
                  style={styles.roomImage}
                  containerStyle={styles.roomImageContainer}
                  {...parallaxProps}
                />
              </View>
            );
          }}
        />
        <View style={styles.roomInfoContainer}>
          <Text isHeadingTitle isBold>
            {name}
          </Text>
          <Text
            hasMargin
            leftIcon={
              <Image source={icons.helpDesk} style={styles.leftIcon} />
            }>
            {area}
          </Text>
          {descriptions?.map(item => {
            return (
              <Text
                key={item.id}
                hasMargin
                leftIcon={
                  <Image source={item.image} style={styles.leftIcon} />
                }>
                {item.name}
              </Text>
            );
          })}
        </View>
        <View style={styles.roomFacilitiesAndPriceContainer}>
          <View style={styles.facilitiesContainer}>
            {facilities?.map(item => {
              return (
                <Text
                  key={item.id}
                  hasMargin
                  leftIcon={
                    <Image source={item.image} style={styles.leftIcon} />
                  }>
                  {item.name}
                </Text>
              );
            })}
          </View>
          <View style={styles.priceContainer}>
            <Text isSecondary style={styles.oldPrice}>
              890.000 USD
            </Text>
            <Text isPrimary isBold hasMargin>
              399.000 USD
            </Text>
            <Text isSecondary hasMargin>
              /room/night
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            value="Choose"
            style={styles.chooseButton}
            onPress={onChooseButtonPress}
          />
        </View>
      </View>
      {!isLast && <Divider />}
    </Container>
  );
};

export default RoomInfo;

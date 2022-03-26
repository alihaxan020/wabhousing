import * as React from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';
import {Container, Icon, Text} from '../../../components/elements';
import useThemeColors from '../../../custom-hooks/useThemeColors';
import {images} from '../../../../constants';
const HeadingInformation = ({scrollY, hotelDetails}) => {
  const {coverImage, location, name, price} = hotelDetails;
  const {border} = useThemeColors();
  const coverScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });

  const coverTranslateY = scrollY.interpolate({
    inputRange: [-4, 0, 10],
    outputRange: [-2, 0, 3],
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.coverImageContainer,
          {
            transform: [
              {
                translateY: coverTranslateY,
              },
            ],
          },
        ]}>
        <Animated.Image
          source={coverImage || images.homeCover}
          resizeMode="cover"
          style={[
            styles.coverImage,
            {
              transform: [
                {
                  scale: coverScale,
                },
              ],
            },
          ]}
        />
      </Animated.View>
      <Container style={[styles.infoContainer, {borderBottomColor: border}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{name}</Text>
          <View>
            <Text style={styles.location}>{location}</Text>
            <Text leftIcon={<Icon name="location" useIonicons isPrimary />}>
              2km to city
            </Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text isSecondary>/per night</Text>
        </View>
      </Container>
    </View>
  );
};

export default HeadingInformation;

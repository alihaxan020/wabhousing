import * as React from 'react';
import {Container, Rating, Text, Touchable, Icon} from '../../elements';
import useThemeColors from '../../../custom-hooks/useThemeColors';
import {Image, View} from 'react-native';
import styles from './styles';

const HotelInfoRow = ({
  name,
  description,
  ratings,
  price,
  image,
  extraInfo,
  containerStyle,
  onPress,
  bed,
  bath,
  guestes,
}) => {
  const {card} = useThemeColors();

  const _handleOnPress = () => {
    onPress && onPress();
  };

  return (
    <Touchable onPress={_handleOnPress}>
      <Container style={[styles.card, {backgroundColor: card}, containerStyle]}>
        {image ? (
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} resizeMode="cover" />
          </View>
        ) : null}
        <View style={styles.infoContainer}>
          <View>
            <Text numberOfLines={1} isHeadingTitle isBold>
              {name}
            </Text>
            <Text
              isSecondary
              isBold
              hasMargin
              leftIcon={<Icon name="location" useIonicons size={18} />}>
              {description}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              hasMargin
              leftIcon={<Icon name="bed" size={15} useFontAwesome />}>
              {bed} bed
            </Text>
            <Text
              hasMargin
              leftIcon={<Icon name="bath" size={15} useFontAwesome />}>
              {bath} bath
            </Text>
            <Text
              hasMargin
              leftIcon={<Icon name="people-circle" size={16} useIonicons />}>
              {guestes} Guests
            </Text>
          </View>
          <View style={styles.rightInfo}>
            {ratings ? (
              <View style={styles.extraInfoContainer}>
                {extraInfo && <View style={styles.extraInfo}>{extraInfo}</View>}
                <Rating value={ratings} itemSize={16} readonly />
              </View>
            ) : null}
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <Text style={styles.price}>{price}</Text>
              <Text style={{marginTop: 5}}>/night</Text>
            </View>
          </View>
        </View>
      </Container>
    </Touchable>
  );
};

export default HotelInfoRow;

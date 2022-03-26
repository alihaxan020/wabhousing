import * as React from 'react';
import {Rating as BaseRating} from 'react-native-ratings';
import {useTheme} from '@react-navigation/native';

const Rating = ({
  value,
  readonly,
  itemSize,
  ratingStarBackgroundColor,
  ...rest
}) => {
  const {
    colors: {primary, card, background},
  } = useTheme();
  return (
    <BaseRating
      type="custom"
      readonly={readonly}
      startingValue={value}
      imageSize={itemSize}
      ratingColor={primary}
      ratingBackgroundColor={background}
      tintColor={ratingStarBackgroundColor ? ratingStarBackgroundColor : card}
      {...rest}
    />
  );
};

export default Rating;

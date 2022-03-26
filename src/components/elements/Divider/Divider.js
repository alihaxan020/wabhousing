import * as React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import useThemeColors from '../../../custom-hooks/useThemeColors';
import styles from './styles';

const Divider = ({style, hasMargin = true}) => {
  const {border} = useThemeColors();
  const margin = hasMargin ? 10 : 0;
  return (
    <View
      style={[
        styles.divider,
        {backgroundColor: border, marginTop: margin, marginBottom: margin},
        style,
      ]}
    />
  );
};

export default Divider;

import * as React from 'react';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';

const Icon = ({
  isPrimary,
  useIonicons,
  useMaterialIcons,
  useFontAwesome,
  color,
  ...rest
}) => {
  const {
    colors: {text, primary},
  } = useTheme();
  let iconColor = isPrimary ? primary : text;
  if (color) {
    iconColor = color;
  }

  if (useIonicons) {
    return <Ionicons {...rest} color={iconColor} />;
  } else if (useMaterialIcons) {
    return <MaterialCommunityIcons {...rest} color={iconColor} />;
  } else if (useFontAwesome) {
    return <FontAwesome {...rest} color={iconColor} />;
  } else {
    return <IconFontAwesome5 {...rest} color={iconColor} />;
  }
};

export default Icon;

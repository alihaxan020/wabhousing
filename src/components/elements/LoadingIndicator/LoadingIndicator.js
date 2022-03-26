import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import useThemeColors from '../../../custom-hooks/useThemeColors';

const LoadingIndicator = ({hasMargin, ...rest}) => {
  const {primary} = useThemeColors();
  let margin = 0;
  if (hasMargin) {
    margin = 15;
  }
  return (
    <ActivityIndicator
      color={primary}
      {...rest}
      style={{
        margin,
      }}
    />
  );
};
export default LoadingIndicator;

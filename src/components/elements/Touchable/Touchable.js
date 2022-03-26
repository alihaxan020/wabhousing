import * as React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const Touchable = ({children, ...rest}) => {
  return Platform.OS === 'ios' ? (
    <TouchableOpacity {...rest}>{children}</TouchableOpacity>
  ) : (
    <TouchableNativeFeedback {...rest}>{children}</TouchableNativeFeedback>
  );
};

export default Touchable;

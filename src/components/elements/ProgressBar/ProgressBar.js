import * as React from 'react';
import * as Progress from 'react-native-progress';
import useThemeColors from '../../../custom-hooks/useThemeColors';

const ProgressBar = props => {
  const {primary} = useThemeColors();
  return <Progress.Bar color={primary} {...props} />;
};

export default ProgressBar;

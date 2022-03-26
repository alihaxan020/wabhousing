import * as React from 'react';
import {View, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from '../Icon';
import styles from './styles';

const TextField = ({
  leftIcon,
  leftIconSize,
  style,
  containerStyle,
  hasMargin,
  ...rest
}) => {
  const {
    colors: {text, background},
  } = useTheme();
  let margin = 0;
  if (hasMargin) {
    margin = 5;
  }
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: background, marginTop: margin, marginBottom: margin},
        containerStyle,
      ]}>
      {leftIcon && (
        <Icon style={styles.leftIcon} name={leftIcon} size={leftIconSize} />
      )}
      <TextInput
        style={[{color: text}, styles.textField, style]}
        placeholderTextColor={text}
        underlineColorAndroid="transparent"
        {...rest}
      />
    </View>
  );
};

export default TextField;

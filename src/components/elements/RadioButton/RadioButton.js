import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Container from '../Container';
import Text from '../Text';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './styles';

const RadioButton = ({data, onItemPress, defaultValue}) => {
  const {
    colors: {primary, border, text},
  } = useTheme();
  const [selectedValue, setSelectedValue] = React.useState();
  const _onPress = item => {
    return () => {
      setSelectedValue(item.value);
      onItemPress(item);
    };
  };

  return (
    <>
      {data.map(item => {
        const {value, label, rightElement} = item;
        let isChecked = value === defaultValue;
        if (selectedValue) {
          isChecked = value === selectedValue;
        }
        return (
          <Container
            key={value}
            style={[styles.container, {borderBottomColor: border}]}>
            <TouchableOpacity style={styles.button} onPress={_onPress(item)}>
              <Container style={styles.checkBoxContainer}>
                <View>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isChecked}
                    size={25}
                    fillColor={primary}
                    unfillColor="#FFFFFF"
                    iconStyle={{
                      borderColor: primary,
                    }}
                    textStyle={{
                      color: text,
                    }}
                    onPress={_onPress(item)}
                  />
                </View>
                <View>
                  <Text>{label}</Text>
                </View>
              </Container>
              {rightElement && (
                <Container style={styles.rightElementContainer}>
                  {rightElement}
                </Container>
              )}
            </TouchableOpacity>
          </Container>
        );
      })}
    </>
  );
};

export default RadioButton;

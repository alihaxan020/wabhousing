import * as React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import Text from '../Text';
import styles from './styles';

const Section = ({children, title, actionButtonText, onButtonActionPress}) => {
  const _onButtonActionPress = () => {
    if (onButtonActionPress) {
      onButtonActionPress();
    }
  };

  return (
    <View>
      <View style={styles.sectionTitleContainer}>
        {title && <Text style={styles.sectionTitle}>{title}</Text>}
        {actionButtonText && (
          <Button onPress={_onButtonActionPress} isTransparent>
            <Text style={styles.actionButtonText} isPrimary>
              {actionButtonText}
            </Text>
          </Button>
        )}
      </View>
      {children}
    </View>
  );
};

export default Section;

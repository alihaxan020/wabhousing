import * as React from 'react';
import {View} from 'react-native';
import Touchable from '../Touchable';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';

const ListRowItem = ({
  id,
  note,
  title,
  subTitle,
  leftElement,
  rightElement,
  footer,
  containerStyle,
  leftContainerStyle,
  rightContainerStyle,
  onPress,
  children,
}) => {
  const _onPress = () => {
    onPress &&
      onPress({
        id,
        title,
        subTitle,
        leftElement,
        rightElement,
      });
  };

  const renderContent = () => {
    return (
      <Container style={containerStyle}>
        <View style={styles.itemContainer}>
          {leftElement && (
            <View style={[styles.leftItem, leftContainerStyle]}>
              {leftElement}
            </View>
          )}
          <View style={styles.content}>
            {note && (
              <Text isSecondary style={styles.note}>
                {note}
              </Text>
            )}
            {title && (
              <Text isBold style={styles.titleText}>
                {title}
              </Text>
            )}
            {subTitle && (
              <Text style={styles.subTitle} isSecondary>
                {subTitle}
              </Text>
            )}
          </View>
          {rightElement && (
            <View style={[styles.rightItem, rightContainerStyle]}>
              {rightElement}
            </View>
          )}
        </View>
        {children && <View style={styles.body}>{children}</View>}
        {footer && <View>{footer}</View>}
      </Container>
    );
  };

  if (!onPress) {
    return renderContent();
  }

  return <Touchable onPress={_onPress}>{renderContent()}</Touchable>;
};

export default ListRowItem;

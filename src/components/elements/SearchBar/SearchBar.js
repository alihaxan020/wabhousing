import * as React from 'react';
import {View} from 'react-native';
import Container from '../Container';
import TextField from '../TextField';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const SearchBar = ({
  leftIconName = 'search',
  placeholder = 'Search',
  isTransparentBackground,
  editable,
  style,
}) => {
  const {
    colors: {card},
  } = useTheme();

  const containerBackground = isTransparentBackground ? 'transparent' : card;

  return (
    <View>
      <Container
        style={[
          styles.searchContainer,
          {backgroundColor: containerBackground},
          style,
        ]}>
        <TextField
          leftIcon={leftIconName}
          placeholder={placeholder}
          editable={editable}
        />
      </Container>
    </View>
  );
};

export default SearchBar;

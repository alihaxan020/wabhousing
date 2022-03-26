import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  coverImageContainer: {
    maxHeight: Dimensions.get('screen').height / 4,
    backgroundColor: 'red',
  },
  coverImage: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('screen').height / 4,
  },
});

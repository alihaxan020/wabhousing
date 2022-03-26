import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  rootView: {
    flex: 1,
  },
  container: {
    position: 'relative',
  },
  coverImageContainer: {
    maxHeight: Dimensions.get('screen').height / 4,
  },
  coverImage: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('screen').height / 4,
  },
  descriptionContainer: {
    padding: 15,
  },
  footer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

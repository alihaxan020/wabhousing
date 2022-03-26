import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  name: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    fontSize: 18,
  },
});

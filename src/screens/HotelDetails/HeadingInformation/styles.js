import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  coverImageContainer: {
    maxHeight: Dimensions.get('screen').height / 4,
  },
  coverImage: {
    width: '100%',
    height: Dimensions.get('screen').height / 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },
  priceContainer: {
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

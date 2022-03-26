import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
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
  imageContainer: {
    width: 130,
    height: 135,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 5,
  },
  rightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  extraInfoContainer: {
    alignItems: 'flex-start',
  },
  extraInfo: {
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 7,
  },
});

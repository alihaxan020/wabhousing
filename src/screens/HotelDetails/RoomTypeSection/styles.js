import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  carouselItem: {
    width: '100%',
    height: 250,
    marginTop: 10,
  },
  roomImageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
  },
  roomImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  roomInfoContainer: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  roomFacilitiesAndPriceContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  facilitiesContainer: {
    flex: 1,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  footer: {
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  chooseButton: {
    width: '25%',
  },
  leftIcon: {
    width: 16,
    height: 16,
    marginTop: 8,
    marginRight: 5,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
  },
});

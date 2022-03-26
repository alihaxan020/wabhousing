import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  facilityContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  facilityItem: {
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,
    padding: 10,
    borderWidth: 0.3,
  },
  facilityImage: {
    height: 30,
    width: 30,
  },
  facilityTitle: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

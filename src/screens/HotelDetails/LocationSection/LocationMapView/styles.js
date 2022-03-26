import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mapViewContainer: {
    height: 250,
  },
  mapView: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  currentLocationMarkerContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 5,
  },
  marker: {
    width: 28,
    height: 28,
  },
  infoContainer: {
    paddingTop: 10,
  },
  mapIcon: {
    width: 26,
    height: 26,
  },
});

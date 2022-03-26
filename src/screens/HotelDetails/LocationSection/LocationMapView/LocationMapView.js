import * as React from 'react';
import {Image, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {darkModeStyle} from '../../../../utils/googleMapStyle';
import styles from './styles';
import {Container} from '../../../../components/elements';
import ListRowItem from '../../../../components/elements/List/ListRowItem';
import {images} from '../../../../../constants';
const LocationMapView = () => {
  const [currentLocation, setCurrentLocation] = React.useState({
    longitude: -122.406417,
    latitude: 37.785834,
    longitudeDelta: 0.0012,
    latitudeDelta: 0.0021,
  });

  const _onRegionChangeComplete = region => {
    setCurrentLocation(region);
  };

  const _onMapViewPressed = event => {
    const {
      nativeEvent: {coordinate},
    } = event;

    console.log('_onMapViewPressed -> coordinate', coordinate);
  };

  return (
    <View>
      <View style={styles.mapViewContainer}>
        <MapView
          scrollEnabled={false}
          loadingEnabled
          cacheEnabled
          loadingIndicatorColor="black"
          loadingBackgroundColor="black"
          style={styles.mapView}
          customMapStyle={darkModeStyle}
          onRegionChangeComplete={_onRegionChangeComplete}
          onPress={_onMapViewPressed}
          region={currentLocation}>
          <Marker
            coordinate={{
              longitude: -122.406417,
              latitude: 37.785834,
            }}>
            <View style={styles.currentLocationMarkerContainer}>
              <Image source={images.logo} style={styles.marker} />
            </View>
          </Marker>
        </MapView>
      </View>
      <Container style={styles.infoContainer}>
        <ListRowItem
          title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
          leftElement={<Image style={styles.mapIcon} source={images.logo} />}
        />
      </Container>
    </View>
  );
};

export default LocationMapView;

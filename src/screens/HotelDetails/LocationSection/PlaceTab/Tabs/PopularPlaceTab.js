import * as React from 'react';
import {Image, View} from 'react-native';
import {Container, Divider, Text} from '../../../../../components/elements';
import styles from './styles';
import ListRowItem from '../../../../../components/elements/List/ListRowItem';
import {images} from '../../../../../../constants';

import {hotelDetails} from '../../../../../data/stubs/hotel-stubs';
const PopularPlaceTab = () => {
  return (
    <Container style={styles.tabContent}>
      {hotelDetails.touristAttraction?.map((place, index) => {
        const {id, name, type, distance} = place;
        const touristAttractionLength =
          hotelDetails.touristAttraction?.length || 0;
        const isLastItem = index === touristAttractionLength - 1;
        return (
          <View key={id}>
            <ListRowItem
              title={name}
              subTitle={type}
              leftElement={
                <Image source={images.logo} style={styles.placeIcon} />
              }
              rightElement={<Text isSecondary>{distance} m</Text>}
            />
            {!isLastItem && <Divider hasMargin={false} />}
          </View>
        );
      })}
    </Container>
  );
};

export default PopularPlaceTab;

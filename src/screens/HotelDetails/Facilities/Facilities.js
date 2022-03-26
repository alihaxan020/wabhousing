import * as React from 'react';
import {Image, View} from 'react-native';
import useThemeColors from '../../../custom-hooks/useThemeColors';
import {Button, Text} from '../../../components/elements';
import styles from './styles';

const Facilities = ({facilities}) => {
  const {border} = useThemeColors();
  return (
    <View>
      <Text isCenter hasMargin isBold>
        Facilities
      </Text>
      <View style={styles.facilityContainer}>
        {facilities.map(facility => {
          const {id, image, name} = facility;
          return (
            <View key={id}>
              <View style={[styles.facilityItem, {borderColor: border}]}>
                <View>
                  <Image style={styles.facilityImage} source={image} />
                </View>
                <View>
                  <Text style={styles.facilityTitle}>{name}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <Button isTransparent>
        <Text isPrimary>View all facilities</Text>
      </Button>
    </View>
  );
};

export default Facilities;

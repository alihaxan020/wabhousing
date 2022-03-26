import * as React from 'react';
import ImageView from 'react-native-image-viewing';
import {Carousel, Section, Touchable} from '../../../components/elements';
import {Dimensions, Image} from 'react-native';
import styles from './styles';

const PhotoSection = ({photos}) => {
  const [imageViewVisible, setImageViewVisible] = React.useState(false);
  const _onItemPress = () => {
    setImageViewVisible(true);
  };

  const images = photos.map(item => {
    return item.image;
  });

  return (
    <Section title="Photos" actionButtonText="View all">
      <Carousel
        data={photos}
        itemWidth={Dimensions.get('window').width / 3}
        renderContent={item => {
          const {id, image} = item;
          return (
            <Touchable key={id} onPress={_onItemPress}>
              <Image source={image} style={styles.image} resizeMode="cover" />
            </Touchable>
          );
        }}
      />
      <ImageView
        images={images}
        imageIndex={0}
        visible={imageViewVisible}
        onRequestClose={() => setImageViewVisible(false)}
      />
    </Section>
  );
};

export default PhotoSection;

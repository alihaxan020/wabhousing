import {Image, ImageBackground, View, StyleSheet} from 'react-native';
import React from 'react';
import {images, platform} from '../../../constants';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Tabs');
  }, 3000);
  return (
    <ImageBackground
      style={Styles.bgImage}
      resizeMode="cover"
      source={images.bg_splash}>
      <View style={Styles.logoContainer}>
        <Image
          source={images.logo_splash}
          style={Styles.logo}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

export default Splash;

const Styles = StyleSheet.create({
  bgImage: {flex: 1, justifyContent: 'center'},
  logoContainer: {
    flex: 0.18,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {width: '95%', height: '100%'},
});

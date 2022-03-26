import {Text, ImageBackground, Animated, ScrollView} from 'react-native';
import {images} from '../../../../constants';
import {Container, SearchBar, TextField} from '../../../components/elements';
import React from 'react';
import styles from './styles';
const SignIn = () => {
  const [email, setEmail] = React.useState('');
  return (
    <ImageBackground
      style={{flex: 1}}
      source={images.loginBg}
      resizeMode="cover">
      <ScrollView>
        <Container style={styles.wrapper}>
          <TextField
            placeholder="Email"
            containerStyle={{paddingVertical: 25}}
            hasMargin
          />
          <TextField
            placeholder="Email"
            containerStyle={{paddingVertical: 25}}
            hasMargin
          />
        </Container>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignIn;

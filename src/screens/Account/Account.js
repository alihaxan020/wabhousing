import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Account = ({navigation}) => {
  return (
    <View>
      <Text>Accunt Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text>Go to Sign In Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});

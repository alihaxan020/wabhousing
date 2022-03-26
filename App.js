import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/routes/stacks/RootStack';
import {StatusBar, View} from 'react-native';
import {lightTheme, darkTheme} from './constants';

const App = () => {
  const [theme, setTheme] = React.useState('light');
  const flex = 1;
  const rootContainerBackgroundColor =
    theme === 'light'
      ? lightTheme.colors.background
      : darkTheme.colors.background;

  return (
    <NavigationContainer theme={theme === 'light' ? lightTheme : darkTheme}>
      <View style={{flex, backgroundColor: rootContainerBackgroundColor}}>
        <RootStack />
      </View>
    </NavigationContainer>
  );
};

export default App;

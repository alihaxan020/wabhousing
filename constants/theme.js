import {DefaultTheme, DarkTheme} from '@react-navigation/native';
export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EEAF00',
    secondary: '#121212',
    text: '#282828',
    border: '#bababa',
  },
};
export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#EEAF00',
    secondary: '#ccc',
    text: '#FEFEFE',
    card: '#282828',
    background: '#121212',
    border: '#353535',
  },
};

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStack} from '../stacks/HomeStack';
import {BookingStack} from '../stacks/BookingStack';
import {AccountStack} from '../stacks/AccountStack';
import {NotificationStack} from '../stacks/NotificationStack';
import {HousesStack} from '../stacks/HousesStack';
import {Image} from 'react-native';
import {images} from '../../../constants';
const Tab = createBottomTabNavigator();
function LogoTitle() {
  return (
    <Image
      style={{width: 200, height: 50}}
      source={images.logo}
      resizeMode="contain"
    />
  );
}
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#EEAF00',
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
        headerTitle: props => <LogoTitle {...props} />,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Houses"
        component={HousesStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

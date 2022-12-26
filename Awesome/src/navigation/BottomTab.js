import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CuisinePage from '../screens/CuisinePage';
import ProfileScreen from '../screens/ProfileScreen';
import FavouritePage from '../screens/FavouritePage';
import SupportPage from '../screens/SupportPage';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {height: 50},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cuisines') {
            iconName = focused ? 'pizza' : 'pizza-outline';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Support') {
            <Icon name="rocket" size={30} color="#900" />;
          }

          //return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#449f37',
        tabBarInactiveTintColor: 'gray',

        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={ProfileScreen} />
      <Tab.Screen name="Cuisines" component={CuisinePage} />
      <Tab.Screen name="Support" component={SupportPage} />
      <Tab.Screen name="Favourites" component={FavouritePage} />
    </Tab.Navigator>
  );
};

export default BottomTab;

import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Italian from '../screens/Italian';
import ProteinRich from '../screens/ProteinRich';
import Thai from '../screens/Thai';

const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Italian" component={Italian} />
      <Tab.Screen name="Protein Rich" component={ProteinRich} />
      <Tab.Screen name="Thai" component={Thai} />
    </Tab.Navigator>
  );
};

export default TopTab;

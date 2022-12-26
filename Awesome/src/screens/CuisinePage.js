import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Indian from './Indian';
import Italian from './Italian';
import ProteinRich from './ProteinRich';
import Thai from './Thai';

const Tab = createMaterialTopTabNavigator();
const CuisinePage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="thai" component={Thai} />
      <Tab.Screen name="italian" component={Italian} />
      <Tab.Screen name="indian" component={Indian} />
    </Tab.Navigator>
  );
};

export default CuisinePage;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: '#3c2a21',
  },
  root: {
    backgroundColor: '#e5e5cb',
    padding: 20,
  },
});

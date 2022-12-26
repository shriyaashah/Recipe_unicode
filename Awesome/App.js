import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';

//import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#3c2a21',
  },
});

export default App;

import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const FavouritePage = () => {
  return <Text style={styles.title}>Favourites</Text>;
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3c2a21',
    fontFamily: 'Cochin',
    margin: 10,
  },
});
export default FavouritePage;

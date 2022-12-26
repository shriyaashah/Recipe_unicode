import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 7,

    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  container_PRIMARY: {
    backgroundColor: '#594545',
  },
  container_SECONDARY: {
    borderColor: '#594545',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text_TERTIARY: {
    fontWeight: 'bold',
    color: '#9e7676',
  },
  text_SECONDARY: {
    fontWeight: 'bold',
    color: '#594545',
  },
});

export default CustomButton;

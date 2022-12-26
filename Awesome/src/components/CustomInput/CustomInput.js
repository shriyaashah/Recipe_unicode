import {View, TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  value,
  setValue,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.container]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        //onBlur={onBlur}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff8ea',
    width: '90%',

    borderColor: '#bc8f8f',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 20,
    margin: 10,
  },
});
export default CustomInput;

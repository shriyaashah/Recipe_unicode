import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  const onConfirmPressed = () => {
    console.warn('onConfirmPressed');
    navigation.navigate('Profile');
  };
  const onSignInPressed = () => {
    console.warn('onSignInPressed');
    navigation.navigate('SignIn');
  };
  const onResendPressed = () => {
    console.warn('onResendPressed');
    navigation.navigate('');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm email</Text>
        <CustomInput
          placeholder="Enter Confirmation Code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#815b5b',
    margin: 10,
  },
});
export default ConfirmEmailScreen;

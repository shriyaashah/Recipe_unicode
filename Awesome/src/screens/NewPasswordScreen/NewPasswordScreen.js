import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [Code, setCode] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const navigation = useNavigation();
  const onSubmitPressed = () => {
    console.warn('onSubmitPressed');
    navigation.navigate('Profile');
  };
  const onSignInPressed = () => {
    console.warn('onSignInPressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput placeholder="Code" value={Code} setValue={setCode} />
        <CustomInput
          placeholder="Enter your New Password"
          value={newPassword}
          setValue={setnewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="SECONDARY"
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
export default NewPasswordScreen;

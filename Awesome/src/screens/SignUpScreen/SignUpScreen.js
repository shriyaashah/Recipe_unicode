import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

//const EMAIL_REGEX =
//  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  //const {control handleSubmit, watch} = useForm();
  //const pwd = watch('password');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setpasswordRepeat] = useState('');
  const navigation = useNavigation();
  const onRegisterPressed = () => {
    console.warn('onRegisterPressed');
    navigation.navigate('ConfirmEmail');
  };
  const onSignInPressed = () => {
    console.warn('onSignInPressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          name="username"
          //control={control}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          value={email}
          setValue={setEmail}
          //control={control}
          placeholder="Email"
        />

        <CustomInput
          value={password}
          setPassword={setPassword}
          //control={control}
          placeholder="Password"
          secureTextEntry={true}
        />

        <CustomInput
          //control={control}
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setpasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
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
export default SignUpScreen;

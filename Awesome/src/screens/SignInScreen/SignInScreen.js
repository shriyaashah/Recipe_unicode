import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

//const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  /* function App() {
    const [input, setInput] = React.useState("")

    function handleChange(e) {
      e.preventDefault();
      setInput(e.target.value)
    } */

  /*const {
      handleSubmit,
      control,
      formState: {errors},
    } = useForm();*/
  //  console.log(errors);

  const onSignInPressed = data => {
    console.log(data);
    // validate user
    navigation.navigate('Bottom');
  };
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />

        <CustomInput
          value={username}
          setValue={setUsername}
          placeholder="Username"
          //control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          value={password}
          setPassword={setPassword}
          placeholder="Password"
          //control={control}
          secureTextEntry={true}
          rules={{required: 'Password is required'}}
        />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Sign up"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
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
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#815b5b',
    margin: 10,
    fontFamily: 'Cochin',
  },
});
export default SignInScreen;

import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };
  return (
    <>
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#ffe4e1"
        fgColor="#8b0000"
      />

      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#b0e0e6"
        fgColor="#191970"
      />
    </>
  );
};

export default SocialSignInButtons;

import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const {signed, signIn} = useAuth();
  console.log(signed);

  const handleSignIn = () => {
    signIn();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

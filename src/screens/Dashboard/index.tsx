import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;

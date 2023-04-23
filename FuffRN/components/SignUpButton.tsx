import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Alert} from 'react-native';

const SignUpButton = () => {
  const [signedUp, setSignedUp] = useState(false);

  const handleSignUp = () => {
    if (signedUp) {
      Alert.alert(
        'Already Signed Up',
        'You have already signed up for this activity.',
      );
      return;
    }

    Alert.alert(
      'Confirm Sign Up',
      'Are you sure you want to sign up for this activity?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setSignedUp(true);
            Alert.alert(
              'Success',
              'You have successfully signed up for this activity.',
            );
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  button: {
    backgroundColor: '#CFB87C',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
  },
});

export default SignUpButton;

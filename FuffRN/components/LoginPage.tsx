import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const buffaloIcon = require('./assets/buffalo-icon.png');

interface LoginPageProps {
  navigation: any;
}

const LoginPage: React.FC<LoginPageProps> = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const passwordRef = useRef(null);

  const handleLogin = () => {
    Keyboard.dismiss();
    // API Here
    // LOGIN REDIRECT TO HOMEPAGE HERE
    navigation.navigate('Home Page');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Image source={buffaloIcon} />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#A2A4A3"
            style={styles.textInput}
            onChangeText={setUsername}
            value={username}
            textContentType={'username'}
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={passwordRef}
            placeholder="Password"
            placeholderTextColor="#A2A4A3"
            secureTextEntry
            textContentType={'password' || 'newPassword'}
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  textInput: {
    fontSize: 16,
    height: 50,
  },
  button: {
    width: '80%',
    backgroundColor: '#CFB87C',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;

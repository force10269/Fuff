import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

const buffaloIcon = require('./assets/buffalo-icon.png');

interface LoginPageProps {
  navigation: any;
}

const LoginPage: React.FC<LoginPageProps> = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // API Here
    // LOGIN REDIRECT TO HOMEPAGE HERE
    navigation.navigate('Home Page');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={buffaloIcon} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#A2A4A3"
          style={styles.textInput}
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#A2A4A3"
          secureTextEntry
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

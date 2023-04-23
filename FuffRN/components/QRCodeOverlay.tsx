import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Menu from './Menu';

const QRCodeOverlay = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('./assets/buffalo-icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to the Gym</Text>
        <Text style={styles.subtitle}>Please scan the code below to check in</Text>
        <View style={styles.qrContainer}>
          <QRCode
            value="sample"
            size={250}
            color="#000000"
            backgroundColor="#FFFFFF"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.userIDText}>{'User ID: 001'}</Text>
          <Text style={styles.dateText}>{'Date: 23 April 2023'}</Text>
          <Text style={styles.timeText}>{'Time: 11:30 AM'}</Text>
        </View>
      </View>
      <Menu />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginTop: -100,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#303030',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666666',
  },
  qrContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  userIDText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#303030',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#303030',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default QRCodeOverlay;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Menu from './Menu';

const QRCodeOverlay = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <QRCode
          value="sample"
          size={200}
          color="#000000"
          backgroundColor="#FFFFFF"
        />
        <View style={styles.textContainer}>
          <Text style={styles.userIDText}>{'User ID: 0'}</Text>
          <Text style={styles.dateText}>{'Date: 0'}</Text>
          <Text style={styles.timeText}>{'Time: 0'}</Text>
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
  },
  textContainer: {
    marginTop: 10,
  },
  userIDText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateText: {
    fontSize: 16,
    textAlign: 'center',
  },
  timeText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default QRCodeOverlay;

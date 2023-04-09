import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const QRCodeButton = ({zIndex}: {zIndex: number}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('QR Code Overlay')}
      style={[styles.qrButton, {zIndex}]}>
      <Image
        source={require('./assets/qr-code-icon.png')}
        style={styles.qrIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  qrButton: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#0275d8',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  qrIcon: {
    width: 40,
    height: 40,
    tintColor: 'black',
  },
});

export default QRCodeButton;

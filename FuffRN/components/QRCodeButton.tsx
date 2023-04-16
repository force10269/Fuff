import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

interface QRCodeButtonProps {
  onPress?: () => void;
  zIndex?: number;
  hideOnQRCodeOverlay?: boolean;
}

const QRCodeButton: React.FC<QRCodeButtonProps> = ({
  onPress,
  zIndex,
  hideOnQRCodeOverlay,
}) => {
  const {navigate} = useNavigation();
  const route = useRoute();
  const [onHomePage, setOnHomePage] = useState(false);

  useEffect(() => {
    setOnHomePage(route.name === 'Home Page');
  }, [route.name]);

  if (hideOnQRCodeOverlay && route.name === 'QR Code Overlay') {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => navigate('QR Code Overlay')}
      style={[styles(onHomePage).qrButton, {zIndex}]}>
      <View style={styles(onHomePage).qrContainer}>
        <Image
          source={require('./assets/qr-code-icon.png')}
          style={styles(onHomePage).qrIcon}
        />
      </View>
      <Text style={styles(onHomePage).qrLabel}>Member ID</Text>
    </TouchableOpacity>
  );
};

const styles = (onHomePage: Boolean = false) =>
  StyleSheet.create({
    qrButton: {
      position: 'absolute',
      bottom: onHomePage ? 30 : 80,
      right: 20,
      width: onHomePage ? 100 : 65,
      height: onHomePage ? 100 : 65,
      borderRadius: 35,
      backgroundColor: '#0275d8',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    qrIcon: {
      width: onHomePage ? 50 : 25,
      height: onHomePage ? 50 : 25,
      tintColor: 'black',
    },
    qrContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    qrLabel: {
      marginTop: 4,
      color: 'black',
      fontSize: onHomePage ? 13 : 8,
      fontWeight: 'bold',
    },
  });

export default QRCodeButton;

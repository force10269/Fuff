import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
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
      <Image
        source={require('./assets/qr-code-icon.png')}
        style={styles().qrIcon}
      />
    </TouchableOpacity>
  );
};

const styles = (onHomePage: Boolean = false) =>
  StyleSheet.create({
    qrButton: {
      position: 'absolute',
      bottom: onHomePage ? 40 : 80,
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

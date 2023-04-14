import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  LayoutAnimation,
} from 'react-native';
import QRCodeButton from './QRCodeButton';
import {useNavigation} from '@react-navigation/native';
import menuItems from './data/MenuData';

const menuIcon = require('./assets/menu-icon.png');

const Menu = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {navigate} = useNavigation();

  const handleMenuPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuItems = () =>
    menuItems.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={styles.menuItem}
        onPress={() => {
          handleMenuPress();
          navigate(`${item.screen}`);
        }}>
        <Text style={styles.menuItemTitle}>{item.title}</Text>
      </TouchableOpacity>
    ));

  return (
    <>
      {isMenuOpen && (
        <View
          style={styles.overlay}
          onStartShouldSetResponder={() => true}
          onResponderRelease={handleMenuPress}
        />
      )}
      <View style={styles.menuContainer}>
        <QRCodeButton zIndex={isMenuOpen ? -1 : 1} hideOnQRCodeOverlay />
        <View>
          <View style={styles.halfOval}>
            <TouchableOpacity
              onPress={handleMenuPress}
              style={styles.menuButton}>
              <Image source={menuIcon} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomRectangle} />
        </View>
        {isMenuOpen && (
          <View style={styles.menuItemsContainer}>{renderMenuItems()}</View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  bottomRectangle: {
    width: '100%',
    height: 20,
    backgroundColor: '#CFB87C',
  },
  halfOval: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'black',
    backgroundColor: '#CFB87C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 40,
  },
  menuItemsContainer: {
    backgroundColor: '#CFB87C',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  menuItem: {
    textAlign: 'center',
    padding: 15,
  },
  menuItemTitle: {
    fontSize: 16,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default Menu;

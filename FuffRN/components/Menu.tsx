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
        style={styles(isMenuOpen).menuItem}
        onPress={() => {
          handleMenuPress();
          navigate(`${item.screen}`);
        }}>
        <Image source={item.icon} style={styles(isMenuOpen).menuItemIcon} />
        <Text style={styles(isMenuOpen).menuItemTitle}>{item.title}</Text>
      </TouchableOpacity>
    ));

  return (
    <>
      {isMenuOpen && (
        <View
          style={styles(isMenuOpen).overlay}
          onStartShouldSetResponder={() => true}
          onResponderRelease={handleMenuPress}
        />
      )}
      <View style={styles(isMenuOpen).menuContainer}>
        <QRCodeButton zIndex={isMenuOpen ? -1 : 1} hideOnQRCodeOverlay />
        <View>
          <View style={styles(isMenuOpen).halfOval}>
            <TouchableOpacity
              onPress={handleMenuPress}
              style={styles(isMenuOpen).menuButton}>
              <Image source={menuIcon} style={styles(isMenuOpen).menuIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles(isMenuOpen).bottomRectangle} />
        </View>
        {isMenuOpen && (
          <View style={styles(isMenuOpen).menuItemsContainer}>
            {renderMenuItems()}
          </View>
        )}
      </View>
    </>
  );
};

const styles = (isMenuOpen: Boolean) =>
  StyleSheet.create({
    menuContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    bottomRectangle: {
      width: '100%',
      height: isMenuOpen ? 0 : 20,
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
      width: 50,
      height: 50,
    },
    menuItemsContainer: {
      backgroundColor: '#CFB87C',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      paddingBottom: 30,
      display: isMenuOpen ? 'flex' : 'none',
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      padding: 18,
    },
    menuItemIcon: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    menuItemTitle: {
      fontWeight: 'bold',
      fontSize: 20,
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

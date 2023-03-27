import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  LayoutAnimation,
} from 'react-native';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const menuItems = [
  {
    title: 'Home',
    screen: 'Home Page',
  },
  {
    title: 'Notifications',
    screen: 'Notifications Page',
  },
  {
    title: 'Hours/Schedules',
    screen: 'Hours Schedules Page',
  },
  {
    title: 'Classes',
    screen: 'Classes Page',
  },
  {
    title: 'Headcount',
    screen: 'Live Head Count Page',
  },
  {
    title: 'Intramural Sports',
    screen: 'Intramurals/Clubs Page',
  },
  {
    title: 'Semester Passes',
    screen: 'Semester Passes',
  },
  {
    title: 'Member ID QR Code',
    screen: 'QR Code Overlay',
  },
];

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
    <View style={styles.menuContainer}>
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Image
            source={require('./assets/menu-icon.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
      {isMenuOpen && (
        <View style={styles.menuItemsContainer}>{renderMenuItems()}</View>
      )}
    </View>
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
  menuBar: {
    backgroundColor: '#fff',
    borderTopColor: '#d2d2d2',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  menuButton: {
    alignItems: 'center',
    padding: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  menuItemsContainer: {
    backgroundColor: '#fff',
    borderTopColor: '#d2d2d2',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    textAlign: 'center',
    padding: 15,
  },
  menuItemTitle: {
    fontSize: 16,
  },
});

export default Menu;

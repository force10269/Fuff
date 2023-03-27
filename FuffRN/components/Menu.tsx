import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  LayoutAnimation,
} from 'react-native';
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
    title: 'Member ID',
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
    <>
      {isMenuOpen && (
        <View
          style={styles.overlay}
          onStartShouldSetResponder={() => true}
          onResponderRelease={handleMenuPress}
        />
      )}
      <View style={styles.menuContainer}>
        <View>
          <View style={styles.halfOval}>
            <TouchableOpacity
              onPress={handleMenuPress}
              style={styles.menuButton}>
              <Image
                source={require('./assets/menu-icon.png')}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          </View>
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

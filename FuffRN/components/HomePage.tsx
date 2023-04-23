import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import QRCodeButton from './QRCodeButton';
import {useNavigation} from '@react-navigation/native';
import HeroCarousel from './HeroCarousel';

const classesIcon = require('./assets/classes-icon.png');
const clubsIcon = require('./assets/clubs-icon.png');
const hoursIcon = require('./assets/hours-icon.png');
const headcountIcon = require('./assets/headcount-icon.png');
const notificationsIcon = require('./assets/notifications-icon.png');
const passesIcon = require('./assets/passes-icon.png');

const screenWidth = Dimensions.get('window').width;
const buttonWidthPercentage = 0.3;
const buttonHeightPercentage = 0.27;
const buttonWidth = screenWidth * buttonWidthPercentage;
const buttonHeight = screenWidth * buttonHeightPercentage;

const HomePage = () => {
  const {navigate} = useNavigation();

  const buttonsData = [
    {
      title: 'Classes',
      screen: 'Classes Page',
      icon: classesIcon,
    },
    {
      title: 'Clubs & Intramural Sports',
      screen: 'Intramurals/Clubs Page',
      icon: clubsIcon,
    },
    {
      title: 'Hours and Schedule',
      screen: 'Hours Schedules Page',
      icon: hoursIcon,
    },
    {
      title: 'Live Headcount',
      screen: 'Live Head Count Page',
      icon: headcountIcon,
    },
    {
      title: 'Notifications',
      screen: 'Notifications Page',
      icon: notificationsIcon,
    },
    {
      title: 'Semester Passes',
      screen: 'Semester Passes',
      icon: passesIcon,
    },
  ];

  const renderButtons = () => {
    return buttonsData.map((button, index) => (
      <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={() => navigate(button.screen)}>
        <Image style={styles.buttonIcon} source={button.icon} />
        <Text style={styles.buttonText}>{button.title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <QRCodeButton />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>f u f f</Text>
        <TouchableOpacity onPress={() => navigate('Account Page')}>
          <View style={styles.userContainer}>
            <Image
              style={styles.userIcon}
              source={require('./assets/user-icon.png')}
            />
            <Text style={styles.userLabel}>My Account</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.alertBar}>
        <Text style={styles.alertText}>Alert: There is a fire drill</Text>
      </View>
      <View style={styles.buttonContainer}>{renderButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 65,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: '42%',
  },
  userIcon: {
    width: 30,
    height: 30,
  },
  alertBar: {
    backgroundColor: '#F44336',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  alertText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  heroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#CFB87C',
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
  buttonIcon: {
    width: 45,
    height: 45,
  },
  buttonText: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  headcountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    bottom: 75,
    alignSelf: 'center',
  },
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  carouselImage: {
    width: 180,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  carouselTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userLabel: {
    marginTop: 4,
    color: 'black',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default HomePage;

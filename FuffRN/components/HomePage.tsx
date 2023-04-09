import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Menu from './Menu';
import QRCodeButton from './QRCodeButton';
import {useNavigation} from '@react-navigation/native';
import HeroCarousel from './HeroCarousel';

const HomePage = () => {
  const {navigate} = useNavigation();

  // Sample filler classes data
  const popularClasses = [
    {
      title: 'Aenean leo',
    },
    {
      title: 'In turpis',
    },
    {
      title: 'Lorem Ipsum',
    },
  ];

  return (
    <View style={styles.container}>
      <Menu />
      <QRCodeButton />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>f u f f</Text>
        <TouchableOpacity onPress={() => navigate('Account Page')}>
          <Image
            style={styles.userIcon}
            source={require('./assets/user-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.alertBar}>
        <Text style={styles.alertText}>Alert: There is a fire drill</Text>
      </View>
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Popular Classes</Text>
        <HeroCarousel />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Classes Page')}>
          <Text style={styles.buttonText}>Reserve A Class</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Hours Schedules Page')}>
          <Text style={styles.buttonText}>Special Events</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headcountContainer}>
        {/* Visualized icons for live headcount go here */}
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#CFB87C',
    width: 150,
    height: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
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
});

export default HomePage;

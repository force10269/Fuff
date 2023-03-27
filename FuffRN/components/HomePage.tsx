import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Menu from './Menu';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Menu />
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
        {/* Carousel with popular classes goes here */}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: '42.5%',
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
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  headcountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default HomePage;

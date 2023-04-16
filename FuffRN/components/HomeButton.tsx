import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const HomeButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.homeButton}>Home</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  homeButton: {
    marginRight: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeButton;

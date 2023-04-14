import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Menu from './Menu';

type SemesterPassesProps = {};

const SemesterPasses: React.FC<SemesterPassesProps> = () => {
  const handlePress = () => {
    Linking.openURL(
      'https://www.colorado.edu/recreation/membership-and-lockers/membership-rates',
    );
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Semester Passes</Text>
            <View style={styles.passesContainer}>
              <TouchableOpacity style={styles.passCard} onPress={handlePress}>
                <Text style={styles.passTitle}>Spring 2023</Text>
                <Text style={styles.passInfo}>1/1/23 - 5/31/23</Text>
                <Text style={styles.passInfo}>Price: $250</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.passCard} onPress={handlePress}>
                <Text style={styles.passTitle}>Fall 2023</Text>
                <Text style={styles.passInfo}>8/1/23 - 12/31/23</Text>
                <Text style={styles.passInfo}>Price: $250</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Your Passes</Text>
            <View style={styles.passesContainer}>
              <View style={styles.passCard}>
                <Text style={styles.passTitle}>No Current Passes</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Menu />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: '150%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  passesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  passCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    width: '45%',
  },
  passTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  passInfo: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SemesterPasses;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Menu from './Menu';

const ClassDetailsPage = ({route}) => {
  const {classObj} = route.params;

  return (
    <>
      <Menu />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{classObj.name}</Text>
          <Text style={styles.description}>{classObj.description}</Text>
          <Text style={styles.instructor}>Instructor: {classObj.instructor}</Text>
          <Text style={styles.time}>Time: {classObj.time}</Text>
          <Text style={styles.location}>Location: {classObj.location}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  instructor: {
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ClassDetailsPage;

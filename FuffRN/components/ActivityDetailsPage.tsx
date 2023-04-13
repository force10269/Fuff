import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Menu from './Menu';

const ActivityDetailsPage = ({route}) => {
  const {activity} = route.params;

  return (
    <>
      <Menu />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{activity.title}</Text>
          <Text style={styles.subtitle}>{activity.subtitle}</Text>
          <Text style={styles.type}>Type: {activity.type}</Text>
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
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  type: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ActivityDetailsPage;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { weeklyClassesData } from './data/WeeklyClassesData';

const WeeklyClasses = () => {
    const daysOfWeek = ['M', 'T', 'W', 'Th', 'F'];
  
    return (
      <View style={styles.container}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayLabel}>{day}</Text>
            {weeklyClassesData[day].map((classData, classIndex) => (
              <View key={classIndex} style={styles.classItem}>
                <Text style={styles.classTime}>{classData.time}</Text>
                <Text style={styles.classTitle}>{classData.title}</Text>
                <Text style={styles.classLocation}>{classData.location}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  dayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  dayLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classItem: {
    marginBottom: 5,
  },
  classTime: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  classTitle: {
    fontSize: 14,
  },
  classLocation: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default WeeklyClasses;

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

type HoursSchedulesProps = {
  navigation: any;
};

const HoursSchedulesPage = ({navigation}: HoursSchedulesProps) => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hours/Schedule</Text>
      <Calendar
        current={''}
        minDate={''}
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: {selected: true, selectedColor: '#CFB87C'},
        }}
        theme={{
          todayTextColor: '#CFB87C',
          selectedDayBackgroundColor: '#CFB87C',
          arrowColor: '#CFB87C',
        }}
      />
      <View style={styles.modal}>
        <Text style={styles.date}>{selectedDate}</Text>
        <Text style={styles.hoursTitle}>CU Recreation Center Hours</Text>
        <Text style={styles.hoursText}>
          Monday - Thursday: 6:00am - 10:00pm{'\n'}
          Friday: 6:00am - 9:00pm{'\n'}
          Saturday - Sunday: 8:00am - 7:00pm{'\n'}
          {'\n'}Will Vill Hours{'\n'}
          {'\n'}Monday - Friday: 7:00am - 8:00pm{'\n'}
          Saturday: 9:00am - 7:00pm{'\n'}
          Sunday: 11:00am - 5:00pm{'\n'}
          {'\n'}Note: Hours are subject to change.
        </Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    height: '60%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hoursTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  hoursText: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#CFB87C',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HoursSchedulesPage;

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Menu from './Menu';

type HoursSchedulesProps = {
  navigation: any;
};

const HoursSchedulesPage = ({navigation}: HoursSchedulesProps) => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString + " schedule here");
  };

  return (
    <View style={styles.container}>
      <Menu />
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 120,
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
});

export default HoursSchedulesPage;

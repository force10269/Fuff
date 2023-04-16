import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Menu from './Menu';
import sampleSchedule from './data/HoursScheduleData';

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
      <Menu />
      <Text style={styles.headerText}>Hours/Schedule</Text>
      <Calendar
        current={''}
        minDate={''}
        onDayPress={onDayPress}
        markedDates={{
          ...Object.keys(sampleSchedule).reduce(
            (acc, date) => ({...acc, [date]: {marked: true}}),
            {},
          ),
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
        {selectedDate &&
          sampleSchedule[selectedDate] &&
          sampleSchedule[selectedDate].events.map((event, index) => (
            <View key={index} style={styles.event}>
              <Text style={styles.eventTime}>{event.time}</Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
            </View>
          ))}
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
    height: '50%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -100,
  },
  event: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    flexWrap: 'wrap',
    marginTop: -50,
  },
  eventTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  eventTitle: {
    fontSize: 16,
  },
});

export default HoursSchedulesPage;

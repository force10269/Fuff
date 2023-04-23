import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Linking,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Menu from './Menu';
import WeeklyClasses from './WeeklyClasses';
import sampleSchedule from './data/HoursScheduleData';

type HoursSchedulesProps = {
  navigation: any;
};

const Divider = () => {
  return <View style={styles.divider} />;
};

const HoursSchedulesPage = ({navigation}: HoursSchedulesProps) => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <View style={styles.generalHours}>
          <Text style={styles.generalHoursTitle}>
            Main Student Recreation Center
          </Text>
          <Text style={styles.generalHoursText}>
            Monday-Friday: 6 a.m.-11:30 p.m.
          </Text>
          <Text style={styles.generalHoursText}>
            Saturday-Sunday, 9 a.m.-11 p.m.
          </Text>
          <Text style={styles.generalHoursTitle}>
            Williams Village Rec Center
          </Text>
          <Text style={styles.generalHoursText}>
            Monday-Friday: 6 a.m.-11:30 p.m.
          </Text>
          <Text style={styles.generalHoursText}>
            Saturday-Sunday, 9 a.m.-11 p.m.
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.colorado.edu/recreation/facilities/rec-center-hours',
              )
            }
            style={styles.fullHoursButton}>
            <Text style={styles.fullHoursButtonText}>View Full Hours</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <Text style={styles.weeksClassScheduleTitle}>
          Week's Class Schedule
        </Text>
        <WeeklyClasses />
        <Divider />
        <Text style={styles.calendarTitle}>Events & Daily Hours</Text>
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
          {selectedDate && sampleSchedule[selectedDate] && (
            <ScrollView contentContainerStyle={styles.eventContainer}>
              {sampleSchedule[selectedDate].events.map((event, index) => (
                <View key={index} style={styles.event}>
                  <Text style={styles.eventTime}>{event.time}</Text>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>
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
  generalHours: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  generalHoursTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  generalHoursText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  fullHoursButton: {
    backgroundColor: '#CFB87C',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  fullHoursButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  modal: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventContainer: {
    paddingBottom: 10,
  },
  event: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  eventTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  eventTitle: {
    fontSize: 16,
  },
  weeksClassScheduleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  calendarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#CFB87C',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});

export default HoursSchedulesPage;

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import HeroCarousel from './HeroCarousel';

type Notification = {
  id: number;
  title: string;
  message: string;
  type: 'alert' | 'message';
};

const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    title: 'Important Announcements',
    message:
      'There will be no Zumba classes next week. Please plan accordingly.',
    type: 'alert',
  },
  {
    id: 2,
    title: 'Upcoming Classes',
    message: 'Yoga class is starting in 30 minutes!',
    type: 'message',
  },
];

const NotificationsPage = (): JSX.Element => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.content}>
        <HeroCarousel
          items={NOTIFICATIONS.filter(n => n.type === 'alert')}
          renderItem={(item: Notification) => (
            <View key={item.id} style={styles.notification}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationMessage}>{item.message}</Text>
            </View>
          )}
          title="Important Announcements"
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Upcoming Classes</Text>
          {NOTIFICATIONS.filter(n => n.type === 'message').map(item => (
            <View key={item.id} style={styles.notification}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationMessage}>{item.message}</Text>
            </View>
          ))}
          {NOTIFICATIONS.filter(n => n.type === 'message').length === 0 && (
            <Text style={styles.emptyMessage}>No registered classes</Text>
          )}
          <Text style={styles.link}>Find a Class</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  notification: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
  },
  emptyMessage: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#2f95dc',
  },
});

export default NotificationsPage;

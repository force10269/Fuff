import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Menu from './Menu';
import NOTIFICATIONS from './data/NotificationsData';

const PriorityNotification: React.FC<{
  priority: 'high' | 'medium' | 'low';
  notifications: Notification[];
}> = ({priority, notifications}) => {
  const filteredNotifications = notifications.filter(
    n => n.priority === priority,
  );
  if (filteredNotifications.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{priority.toUpperCase()} PRIORITY</Text>
      {filteredNotifications.map(item => (
        <View key={item.id} style={styles.notification}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationMessage}>{item.message}</Text>
        </View>
      ))}
    </View>
  );
};

const NotificationsPage = (): JSX.Element => {
  return (
    <>
      <Menu />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Notifications</Text>
        <View style={styles.content}>
          <PriorityNotification priority="high" notifications={NOTIFICATIONS} />
          <PriorityNotification
            priority="medium"
            notifications={NOTIFICATIONS}
          />
          <PriorityNotification priority="low" notifications={NOTIFICATIONS} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    paddingTop: 30,
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
    textAlign: 'center',
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

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

export default NOTIFICATIONS;

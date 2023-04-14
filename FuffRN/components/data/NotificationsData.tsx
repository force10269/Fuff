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
  {
    id: 3,
    title: 'New Product Launch',
    message: 'Check out our new line of workout clothes!',
    type: 'message',
  },
  {
    id: 4,
    title: 'Holiday Schedule',
    message: 'We will be closed on Easter Sunday. Happy Easter!',
    type: 'alert',
  },
  {
    id: 5,
    title: 'Membership Renewal Reminder',
    message: "Don't forget to renew your membership by the end of the month.",
    type: 'alert',
  },
  {
    id: 6,
    title: 'Free Trial Offer',
    message: 'Try out our gym for free for one week! No obligations.',
    type: 'message',
  },
];

export default NOTIFICATIONS;

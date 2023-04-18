const homeIcon = require('../assets/home-icon.png');
const notificationsIcon = require('../assets/notifications-icon.png');
const hoursIcon = require('../assets/hours-icon.png');
const classesIcon = require('../assets/classes-icon.png');
const headcountIcon = require('../assets/headcount-icon.png');
const clubsIcon = require('../assets/clubs-icon.png');
const passesIcon = require('../assets/passes-icon.png');

const menuItems = [
  {
    title: 'Home',
    screen: 'Home Page',
    icon: homeIcon,
  },
  {
    title: 'Notifications',
    screen: 'Notifications Page',
    icon: notificationsIcon,
  },
  {
    title: 'Hours/Schedules',
    screen: 'Hours Schedules Page',
    icon: hoursIcon,
  },
  {
    title: 'Classes',
    screen: 'Classes Page',
    icon: classesIcon,
  },
  {
    title: 'Headcount',
    screen: 'Live Head Count Page',
    icon: headcountIcon,
  },
  {
    title: 'Intramural Sports',
    screen: 'Intramurals/Clubs Page',
    icon: clubsIcon,
  },
  {
    title: 'Semester Passes',
    screen: 'Semester Passes',
    icon: passesIcon,
  },
];

export default menuItems;

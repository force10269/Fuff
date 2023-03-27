import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import AccountPage from './components/AccountPage';
import NotificationsPage from './components/NotificationsPage';
import HoursSchedulesPage from './components/HoursSchedulesPage';
import LiveHeadCountPage from './components/LiveHeadCountPage';
import ClassesPage from './components/ClassesPage';
import IntramuralsClubsPage from './components/IntramuralsClubsPage';
import QRCodeOverlay from './components/QRCodeOverlay';
import LoginPage from './components/LoginPage';
import Menu from './components/Menu';
import SemesterPasses from './components/SemesterPasses';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login Page">
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Account Page" component={AccountPage} />
        <Stack.Screen name="Notifications Page" component={NotificationsPage} />
        <Stack.Screen
          name="Hours Schedules Page"
          component={HoursSchedulesPage}
        />
        <Stack.Screen
          name="Live Head Count Page"
          component={LiveHeadCountPage}
        />
        <Stack.Screen name="Classes Page" component={ClassesPage} />
        <Stack.Screen
          name="Intramurals/Clubs Page"
          component={IntramuralsClubsPage}
        />
        <Stack.Screen name="QR Code Overlay" component={QRCodeOverlay} />
        <Stack.Screen name="Semester Passes" component={SemesterPasses} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

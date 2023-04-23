import React from 'react';
import Menu from './Menu';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const AccountPage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.wrapper}>
          <Image
            source={require('./assets/profile.png')}
            style={styles.avatar}
          />
          <Text style={styles.header}>My Account</Text>
          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.label}>IdentiKey:</Text>
              <Text style={styles.info}>chip1234</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.info}>chip@colorado.edu</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Phone:</Text>
              <Text style={styles.info}>+1 (303) RAL-PHIE</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Date Joined:</Text>
              <Text style={styles.info}>January 1, 2022</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#303030',
  },
  wrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '80%',
    marginTop: 20,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303030',
  },
  info: {
    fontSize: 16,
    color: '#666666',
  },
  buttonContainer: {
    backgroundColor: '#CFB87C',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AccountPage;

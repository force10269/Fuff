import React from 'react';
import Menu from './Menu';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const AccountPage = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.wrapper}>
          <Text style={styles.header}>Account</Text>
          <View style={styles.content}>
            <Text style={styles.label}>IdentiKey:</Text>
            <Text style={styles.info}>dojo1234</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>john.doe@colorado.edu</Text>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.info}>+1 (123) 456-7890</Text>
            <Text style={styles.label}>Date Joined:</Text>
            <Text style={styles.info}>January 1, 2022</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  wrapper: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
  },
});

export default AccountPage;

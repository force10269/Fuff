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
            <Text>Account details here</Text>
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
});

export default AccountPage;

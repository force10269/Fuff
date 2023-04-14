import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Menu from './Menu';

const sampleData = [
  {
    id: 1,
    title: 'Rec Center Main Weight Room',
    progress: 60,
  },
  {
    id: 2,
    title: 'Will Vill Main Weight Room',
    progress: 20,
  },
  {
    id: 3,
    title: 'Rec Center Weight Room Annex',
    progress: 80,
  },
  {
    id: 4,
    title: 'Competition Pool',
    progress: 50,
  },
  {
    id: 5,
    title: 'Basketball Court',
    progress: 40,
  },
  {
    id: 6,
    title: 'Tennis Courts',
    progress: 70,
  },
  {
    id: 7,
    title: 'Group Fitness Room',
    progress: 90,
  },
  {
    id: 8,
    title: 'Racquetball Courts',
    progress: 30,
  },
  {
    id: 9,
    title: 'Locker Rooms',
    progress: 10,
  },
  {
    id: 10,
    title: 'Outdoor Rec Fields',
    progress: 75,
  },
  {
    id: 11,
    title: 'Ice Rink',
    progress: 25,
  },
  {
    id: 12,
    title: 'Running Track',
    progress: 55,
  },
];

const LiveHeadCountPage = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Live Headcount</Text>
          {sampleData.map(item => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressInner, {width: `${item.progress}%`}]}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBar: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    height: 20,
    overflow: 'hidden',
  },
  progressInner: {
    backgroundColor: '#FFD166',
    height: 20,
  },
  paddingBottom: {
    paddingBottom: 150,
  },
});

export default LiveHeadCountPage;

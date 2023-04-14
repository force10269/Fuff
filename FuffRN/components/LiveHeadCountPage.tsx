import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Menu from './Menu';
import sampleData from './data/LiveHeadCountData';

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

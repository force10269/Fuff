import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LiveHeadCountPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Headcount</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Rec Center Main Weight Room</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressInner} />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Will Vill Main Weight Room</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressInner} />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Rec Center Weight Room Annex</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressInner} />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Competition Pool</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressInner} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
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
    width: '60%',
  },
});

export default LiveHeadCountPage;

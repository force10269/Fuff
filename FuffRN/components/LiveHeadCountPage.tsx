import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Menu from './Menu';
import sampleData from './data/LiveHeadCountData';

const LiveHeadCountPage = () => {
  const getColorByProgress = (progress: number) => {
    if (progress >= 75) {
      return '#FF0000';
    } // Red
    if (progress >= 50) {
      return '#FFF200';
    } // Yellow
    return '#4CBB17'; // Green
  };

  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Live Headcount</Text>
          {sampleData.map(item => {
            const progress = item.progress;
            const progressColor = getColorByProgress(progress);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardTitle}>
                  {item.title} - {progress}%
                </Text>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressInner,
                      {backgroundColor: progressColor},
                      {width: `${progress}%`},
                    ]}
                  />
                </View>
              </View>
            );
          })}
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
    height: 20,
  },
});

export default LiveHeadCountPage;

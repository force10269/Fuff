import React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';

type SemesterPassesProps = {};

const SemesterPasses: React.FC<SemesterPassesProps> = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Semester Passes</Text>
          <View style={styles.passesContainer}>
            {/* Add your passes here */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  passesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default SemesterPasses;

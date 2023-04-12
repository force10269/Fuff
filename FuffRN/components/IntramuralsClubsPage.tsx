import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Menu from './Menu';

interface Props {}

const sampleActivities = [
  {
    id: 1,
    title: 'Basketball Club',
    subtitle: 'Every Wednesday, 6pm',
    type: 'ongoing',
  },
  {
    id: 2,
    title: 'Ultimate Frisbee League',
    subtitle: 'Starting in May',
    type: 'upcoming',
  },
];

const IntramuralsClubsPage: React.FC<Props> = () => {
  const [activities, setActivities] = useState(sampleActivities);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setActivities(
      sampleActivities.filter(activity =>
        activity.title.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search]);

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.searchBarInput}
          placeholder="Search Activities"
          onChangeText={updateSearch}
          value={search}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.sectionTitle}>Ongoing</Text>
        <View style={styles.cardContainer}>
          {activities
            .filter(activity => activity.type === 'ongoing')
            .map(activity => (
              <View key={activity.id} style={styles.card}>
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text style={styles.cardSubtitle}>{activity.subtitle}</Text>
              </View>
            ))}
        </View>
        <Text style={styles.sectionTitle}>Upcoming</Text>
        <View style={styles.cardContainer}>
          {activities
            .filter(activity => activity.type === 'upcoming')
            .map(activity => (
              <View key={activity.id} style={styles.card}>
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text style={styles.cardSubtitle}>{activity.subtitle}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
      <Menu />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBarInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    color: 'black',
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 20,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '300',
  },
});

export default IntramuralsClubsPage;

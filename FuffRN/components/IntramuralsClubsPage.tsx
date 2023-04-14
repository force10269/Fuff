import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
  {
    id: 3,
    title: 'Table Tennis Club',
    subtitle: 'Every Monday, 8pm',
    type: 'ongoing',
  },
  {
    id: 4,
    title: 'Swimming Lessons',
    subtitle: 'Starting in June',
    type: 'upcoming',
  },
  {
    id: 5,
    title: 'Running Club',
    subtitle: 'Every Saturday, 9am',
    type: 'ongoing',
  },
  {
    id: 6,
    title: 'Dance Class',
    subtitle: 'Starting in July',
    type: 'upcoming',
  },
  {
    id: 7,
    title: 'Golf Lessons',
    subtitle: 'Starting in August',
    type: 'upcoming',
  },
  {
    id: 8,
    title: 'Martial Arts Club',
    subtitle: 'Every Friday, 6pm',
    type: 'ongoing',
  },
  {
    id: 9,
    title: 'Photography Workshop',
    subtitle: 'Starting in September',
    type: 'upcoming',
  },
  {
    id: 10,
    title: 'Cooking Class',
    subtitle: 'Every Sunday, 4pm',
    type: 'ongoing',
  }
];

const IntramuralsClubsPage: React.FC<Props> = () => {
  const [activities, setActivities] = useState(sampleActivities);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

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
              <TouchableOpacity
                key={activity.id}
                style={styles.card}
                onPress={() => navigation.navigate('Activity Details Page', { activity })}
              >
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text style={styles.cardSubtitle}>{activity.subtitle}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <Text style={styles.sectionTitle}>Upcoming</Text>
        <View style={styles.cardContainer}>
          {activities
            .filter(activity => activity.type === 'upcoming')
            .map(activity => (
              <TouchableOpacity
                key={activity.id}
                style={styles.card}
                onPress={() => navigation.navigate('Activity Details Page', { activity })}
              >
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text style={styles.cardSubtitle}>{activity.subtitle}</Text>
            </TouchableOpacity>
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
    marginTop: 10,
    marginBottom: 10,
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

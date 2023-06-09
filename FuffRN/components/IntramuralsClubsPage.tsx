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
import sampleActivities from './data/IntramuralsClubsData';

interface Props {}

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

  const renderActivityCards = (type: string, category: string) => {
    return activities
      .filter(
        activity => activity.type === type && activity.category === category,
      )
      .map(activity => (
        <TouchableOpacity
          key={activity.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Activity Details Page', {activity})
          }>
          <Text style={styles.cardTitle}>{activity.title}</Text>
          <Text style={styles.cardSubtitle}>{activity.subtitle}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.searchBarInput}
          placeholder="Search Activities"
          placeholderTextColor={'#666666'}
          onChangeText={updateSearch}
          value={search}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.sectionTitle}>Ongoing</Text>
        <View style={styles.cardContainer}>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Intramurals</Text>
            {renderActivityCards('ongoing', 'intramural')}
          </View>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Clubs</Text>
            {renderActivityCards('ongoing', 'club')}
          </View>
        </View>
        <Text style={styles.sectionTitle}>Upcoming</Text>
        <View style={styles.cardContainer}>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Intramurals</Text>
            {renderActivityCards('upcoming', 'intramural')}
          </View>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Clubs</Text>
            {renderActivityCards('upcoming', 'club')}
          </View>
        </View>
        <View style={styles.verticalFiller} />
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
  verticalFiller: {
    height: 150,
    backgroundColor: '#fff',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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

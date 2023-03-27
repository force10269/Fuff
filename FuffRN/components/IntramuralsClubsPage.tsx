import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from 'react-native-platform-searchbar';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {}

const IntramuralsClubsPage: React.FC<Props> = () => {
  const [search, setSearch] = React.useState('');

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder="Search Activities"
        onChangeText={(text: string) => updateSearch(text)}
        value={search}
        inputStyle={styles.searchBarInput}
      />
      <Text style={styles.sectionTitle}>Ongoing</Text>
      <View style={styles.cardContainer}>
        {/* Sample card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Basketball Club</Text>
          <Text style={styles.cardSubtitle}>Every Wednesday, 6pm</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Upcoming</Text>
      <View style={styles.cardContainer}>
        {/* Sample card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ultimate Frisbee League</Text>
          <Text style={styles.cardSubtitle}>Starting in May</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    margin: 0,
    padding: 0,
  },
  searchBarInputContainer: {
    backgroundColor: '#fff',
  },
  searchBarInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    color: 'black',
    fontSize: 16,
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

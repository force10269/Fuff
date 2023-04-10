import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Menu from './Menu';

const sampleClasses = [
  {
    id: 1,
    name: 'Jiu Jitsu',
    description: 'Learn the art of Brazilian Jiu Jitsu',
    instructor: 'Professor John Doe',
    time: 'MWF 2:00pm - 4:00pm',
    location: 'Rec Center Mat Room',
  },
  {
    id: 2,
    name: 'Vinyasa',
    description: 'Learn the basics of Vinyasa Yoga',
    instructor: 'Yogi Jane Doe',
    time: 'TTh 10:00am - 11:00am',
    location: 'Rec Center Mind Body Studio',
  },
  {
    id: 3,
    name: 'Weightlifting 101',
    description: 'Get started with weightlifting with our certified trainers',
    instructor: 'Coach John Smith',
    time: 'MWF 8:00am - 9:00am',
    location: 'Rec Center Weight Room',
  },
];

const ClassesPage = (): JSX.Element => {
  const [classes, setClasses] = useState(sampleClasses);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Filtering the list of classes based on the search term
    setClasses(
      sampleClasses.filter(classObj =>
        classObj.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm]);

  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.container}>
      <Menu />
      <Text style={styles.header}>Classes</Text>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Classes"
          onChangeText={handleSearchTermChange}
          value={searchTerm}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.classesContainer}>
        {classes.map(classObj => (
          <View key={classObj.id} style={styles.classContainer}>
            <Text style={styles.className}>{classObj.name}</Text>
            <Text style={styles.classDescription}>{classObj.description}</Text>
            <Text style={styles.classDetails}>
              {classObj.instructor}, {classObj.time}
            </Text>
            <Text style={styles.classDetails}>{classObj.location}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchBarContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    minWidth: 80,
    height: 40,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  classesContainer: {
    marginTop: 20,
  },
  classContainer: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  className: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  classDescription: {
    color: '#666666',
    marginBottom: 5,
  },
  classDetails: {
    color: '#666666',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ClassesPage;

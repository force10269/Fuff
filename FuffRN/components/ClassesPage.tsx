import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Menu from './Menu';
import sampleClasses from './data/ClassesData';

const ClassesPage = (): JSX.Element => {
  const [classes, setClasses] = useState(sampleClasses);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

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
      <ScrollView style={styles.classesContainer}>
        {classes.map(classObj => (
          <TouchableOpacity
            key={classObj.id}
            style={styles.classContainer}
            onPress={() =>
              navigation.navigate('Class Details Page', {classObj})
            }>
            <Text style={styles.className}>{classObj.name}</Text>
            <Text style={styles.classDescription}>{classObj.description}</Text>
            <Text style={styles.classDetails}>
              {classObj.instructor}, {classObj.time}
            </Text>
            <Text style={styles.classDetails}>{classObj.location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
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
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 10,
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

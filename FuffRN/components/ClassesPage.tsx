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
  {
    id: 4,
    name: 'Pilates',
    description: 'Strengthen and tone your body with Pilates exercises',
    instructor: 'Pilates Instructor',
    time: 'MWF 12:00pm - 1:00pm',
    location: 'Rec Center Mind Body Studio',
  },
  {
    id: 5,
    name: 'Kickboxing',
    description: 'Learn the fundamentals of kickboxing and improve your fitness',
    instructor: 'Coach Emily',
    time: 'TTh 5:00pm - 6:00pm',
    location: 'Rec Center Mat Room',
  },
  {
    id: 6,
    name: 'Zumba',
    description: 'Get your groove on with this high-energy dance workout',
    instructor: 'Dance Instructor',
    time: 'MWF 6:00pm - 7:00pm',
    location: 'Rec Center Gymnasium',
  },
  {
    id: 7,
    name: 'HIIT',
    description: 'Experience a high-intensity interval training workout',
    instructor: 'Coach Joe',
    time: 'TTh 7:00am - 8:00am',
    location: 'Rec Center Weight Room',
  },
  {
    id: 8,
    name: 'Meditation',
    description: 'Practice mindfulness and reduce stress with guided meditation',
    instructor: 'Meditation Instructor',
    time: 'MWF 7:00am - 8:00am',
    location: 'Rec Center Mind Body Studio',
  },
  {
    id: 9,
    name: 'Spin',
    description: 'Burn calories and improve your cardiovascular endurance with indoor cycling',
    instructor: 'Spin Instructor',
    time: 'TTh 6:00pm - 7:00pm',
    location: 'Rec Center Spin Studio',
  },
  {
    id: 10,
    name: 'CrossFit',
    description: 'Experience a challenging and intense workout with CrossFit',
    instructor: 'CrossFit Coach',
    time: 'MWF 5:00pm - 6:00pm',
    location: 'Rec Center Weight Room',
  }
];

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
            onPress={() => navigation.navigate('Class Details Page', {classObj})}
          >
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

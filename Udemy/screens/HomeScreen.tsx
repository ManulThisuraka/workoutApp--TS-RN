import * as React from 'react';
import {Text, View, Button, StyleSheet, FlatList} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import data from '../data.json';
import {Workout} from '../types/data';
import WorkoutItem from '../components/WorkoutItem';

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
  const workout: Workout = {
    slug: 'fsdefsd',
    name: 'fsdfds',
    duration: 455,
    difficulty: 'easy',
    sequence: [],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={data as Workout[]}
        renderItem={WorkoutItem}
        keyExtractor={item => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

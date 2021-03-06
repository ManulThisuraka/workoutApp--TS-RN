import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Workout} from '../types/data';
import {secToMin} from '../utils/time';

export default function WorkoutItem({item}: {item: Workout}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>Duration: {secToMin(item.duration)}</Text>
      <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  duration: {
    fontSize: 15,
  },
  difficulty: {
    fontSize: 15,
  },
});

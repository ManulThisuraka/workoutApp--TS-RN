import React from 'react';
import {Text, View, Button, StyleSheet, FlatList} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import data from '../data.json';

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.slug}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

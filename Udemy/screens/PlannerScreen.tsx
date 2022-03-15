import React, {useEffect} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {
  useEffect(() => {
    console.log('Rendering Planner Screen');

    return () => console.log('Unmounting Planner Screen');
  }, []);
  return (
    <View>
      <Text>Planner Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

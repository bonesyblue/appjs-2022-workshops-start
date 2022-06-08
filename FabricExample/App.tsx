import { Button, StyleSheet, Text, View } from 'react-native';
import { Utils } from 'react-native-appjs';

import React from 'react';

export default function App() {
  const handleGetOrientation = () => {
    console.log('getOrientation', Utils.getOrientation()); // <- call method from module
  };

  return (
    <View style={styles.container}>
      <Text>App.js</Text>
      <Button title="getOrientation" onPress={handleGetOrientation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { Button, StyleSheet, Text, View } from 'react-native';
import { MapView, Utils } from 'react-native-appjs';

import React from 'react';

export default function App() {
  return <FabricExample />;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TurboModulesExample() {
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

function FabricExample() {
  return (
    <View style={styles.container}>
      <Text>App.js</Text>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 300,
    height: 300,
  },
});

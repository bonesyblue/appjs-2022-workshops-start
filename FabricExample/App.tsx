import { Button, StyleSheet, Text, View } from 'react-native';
import { MapType, MapView, Utils } from 'react-native-appjs';
import React, { useState } from 'react';

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

const MAP_TYPES: MapType[] = ['standard', 'satellite', 'hybrid'];

function FabricExample() {
  const [mapType, setMapType] = useState<MapType>('standard');
  return (
    <View style={styles.container}>
      <Text>App.js</Text>
      <MapView style={styles.map} mapType={mapType} />
      {MAP_TYPES.map((item) => (
        <Button key={item} title={item} onPress={() => setMapType(item)} />
      ))}
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

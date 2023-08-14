import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";

const MapScreen = ({ route }) => {
  // const { latitude, longitude } = route.params.coordinates;
  // const { location } = route.params;
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude:50.516339,
          longitude:30.602189,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude:50.516339,
          longitude:30.602189,
          }}
          title="Travel Photo"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
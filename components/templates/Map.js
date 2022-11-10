import React, { useState } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from '../../MapStyle';

const Map = ({ setIsDisplayNewButton, isDisplayNewButton, setIsDisplayModifyButton, spot, setSpot, allMarkers, setIndexCategoryOfMarker, setIndexOfMarker, COLORS }) => {

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => {
          setSpot(e.nativeEvent.coordinate)
          setIsDisplayNewButton(true)
          setIsDisplayModifyButton(false)
        }}
        customMapStyle={mapStyle}>
        {isDisplayNewButton ?
          <Marker
            draggable
            coordinate={{
              latitude: spot.latitude,
              longitude: spot.longitude,
            }}
            pinColor='#00B633'
          />
          : null}
        {
          allMarkers ?
            allMarkers.map((category, indexCategory) => {
              return (
                <View key={indexCategory}>
                  {
                    category.map((marker, indexMarker) => (
                      <Marker
                        key={indexMarker}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.name}
                        description={marker.description}
                        onPress={() => {
                          setIsDisplayNewButton(false)
                          setIsDisplayModifyButton(true)
                          setIndexCategoryOfMarker(indexCategory)
                          setIndexOfMarker(indexMarker)
                        }}
                        pinColor={COLORS[indexCategory]}
                      />
                    ))
                  }
                </View>
              )
            })
            : null
        }
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Map;
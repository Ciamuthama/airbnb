import { View, Text } from "react-native";
import React from "react";
import { ListingList } from "@/constants/listingsitems";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { router } from "expo-router";
import MapView from "react-native-map-clustering";
import Colors from "@/constants/Colors";

const MapComponent = ({ Listing }: any) => {
  const item: ListingList = Listing;

  // const renderCluster = (cluster: any) => {
  //   const {id, geometry, onPress, properties} = cluster;
  //   const points = properties.point_count;
  //   return(
  //     <Marker
  //       key={id}
  //       onPress={onPress}
  //       coordinate={{
  //         latitude: geometry.coordinates[1],
  //         longitude: geometry.coordinates[0],
  //       }}
  //       title={properties.title}
  //       description={properties.description}
  //       ><View style={{backgroundColor:"white",paddingHorizontal:5,paddingVertical:2,borderRadius:10,elevation:20,shadowColor:"black",shadowRadius:0.5}}><Text style={{color:"black",fontFamily:"Nunito_700Bold",fontSize:12}}>{points}</Text></View></Marker>
  //   )
  // }
  return (
    <View>
      <MapView
      animationEnabled={false}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 34,
          longitude: -118,
          latitudeDelta: 19,
          longitudeDelta: 19,
        }}
        style={{ width: "100%", height: "100%" }}
        clusterColor="white"
        clusterTextColor="black"
        clusterFontFamily="Nunito_700Bold"
       
      >
        {Listing.map((items: ListingList, index: number) => (
          <Marker
            key={index}
            coordinate={{
              latitude: items.geolocation.lat,
              longitude: items.geolocation.lon,
            }}
            title={items.name}
            onPress={() => router.push(`/listing/${items.id}`)}
          ><View style={{backgroundColor:"white",paddingHorizontal:5,paddingVertical:2,borderRadius:10,elevation:20,shadowColor:"black",shadowRadius:0.5}}><Text style={{color:"black",fontFamily:"Nunito_700Bold",fontSize:12}}>${items.price}</Text></View></Marker>
        ))}
      </MapView>
    </View>
  );
};

export default MapComponent;

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Share,
  StyleSheet
} from "react-native";
import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import axios from 'axios';
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import ListingData from "@/assets/data/airbnb-listings.json";
import { ListingList } from "@/constants/listingsitems";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Animated, { SlideInDown, interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated";
import Colors from "@/constants/Colors";
import Dive from "@/assets/images/dive.svg";
import Star from "@/assets/images/star.svg";
import Superhost from "@/assets/images/Superhost.svg";
import SelfCheck from "@/assets/images/SelfCheck.svg";
import Cancel from "@/assets/images/Cancel.svg";
import Super from "@/assets/images/Super.svg";
import Exactlocation from "@/assets/images/Exactlocation.svg";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import About from "../(modals)/about";
import Offer from "../customes/Offer";
import MapView, { Marker } from "react-native-maps";
import Host from "../customes/host";

const Details = ({ items }: any) => {
  const navigation = useNavigation()
  const { width } = Dimensions.get("window");
  const Img_Height =  300
  const { id } = useLocalSearchParams();


   const listing: ListingList = (ListingData as any).find(
    (item: any) => item.id === id
  );

  const onShare= async()=>{
    try{
      await Share.share({
        title:listing.name,
        url: listing.listing_url
        
      })
    } catch(err){
      console.log(err)
    }
  }

  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(animatedRef);
  const headerScroll = useAnimatedStyle(() => {
return{
  opacity: interpolate(scrollOffset.value,[0,Img_Height/1.5],[0,1] ),

}
  })
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerBackground:()=>(
        <Animated.View style={[styles.header,headerScroll]} />
      ),
      headerRight:()=>(
      <BottomSheetModalProvider>
      <View style={{flexDirection:"row",gap:10,marginRight:15}}>
      <TouchableOpacity style={{backgroundColor:"white",borderRadius:50,padding:7,elevation:1}} onPress={onShare}>
      <Ionicons name="share-social" size={16} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"white",borderRadius:50,padding:7,elevation:1}}>
      <Ionicons name="heart-outline" size={16} color="black" />
      </TouchableOpacity>
      </View>
      </BottomSheetModalProvider>
    ),headerLeft: ()=>(
      <BottomSheetModalProvider>
      <TouchableOpacity style={{backgroundColor:"white",borderRadius:50,marginLeft:15,padding:7,elevation:1}} onPress={()=>router.back()}>
        <MaterialIcons name="arrow-back" size={16} color="black" />
        </TouchableOpacity>
      </BottomSheetModalProvider>
    ) })
  },[])
  const getYear = (date: any) => {
    const d = new Date(date);
    return new Date().getFullYear() - d.getFullYear();
  };
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={{flex:1,backgroundColor:"white"}}>
        <Animated.ScrollView ref={animatedRef} showsVerticalScrollIndicator={false}>
          <Animated.Image
            source={{ uri: listing.xl_picture_url }}
            style={{ position: "relative", height:Img_Height, width }}
          />
          <View
            style={{
              marginVertical: 15,
              marginHorizontal: 20,
              borderBottomColor: Colors.gray,
              borderBottomWidth: 1,
              paddingBottom: 15,
            }}
          >
            <Text style={{ fontFamily: "Nunito_600Bold", fontSize: 20 }}>
              {listing.name}
            </Text>
            <Text
              style={{
                fontFamily: "Nunito_600SemiBold",
                fontSize: 12,
                paddingTop: 10,
              }}
            >
              {listing.room_type} in {listing.smart_location}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontFamily: "Nunito_500Medium", fontSize: 12 }}>
                {listing.accommodates}+ guests
              </Text>
              <Entypo name="dot-single" size={10} color={Colors.gray} />
              <Text style={{ fontFamily: "Nunito_500Medium", fontSize: 12 }}>
                {listing.bedrooms} bedrooms
              </Text>
              <Entypo name="dot-single" size={10} color={Colors.gray} />
              <Text style={{ fontFamily: "Nunito_500Medium", fontSize: 12 }}>
                {listing.beds} beds
              </Text>
              <Entypo name="dot-single" size={10} color={Colors.gray} />
              <Text style={{ fontFamily: "Nunito_500Medium", fontSize: 12 }}>
                {listing.bathrooms} baths
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: 5,
                gap: 5,
              }}
            >
              <View
                style={{ alignItems: "center", flexDirection: "row", gap: 3 }}
              >
                <Star width={14} height={14} fill={Colors.dark} />
                <Text
                  style={{
                    fontFamily: "Nunito_700Bold",
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  {listing.review_scores_rating / 20}
                </Text>
              </View>
              <Entypo name="dot-single" size={10} color={Colors.dark} />
              <Text
                style={{
                  fontFamily: "Nunito_700Bold",
                  fontSize: 12,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.gray,
                }}
              >
                {listing.number_of_reviews} reviews
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              marginHorizontal: 20,
              paddingVertical: 15,
              borderBottomColor: Colors.gray,
              borderBottomWidth: 1,
            }}
          >
            <Image
              source={{ uri: listing.host_picture_url }}
              style={{ height: 40, width: 40, borderRadius: 20 }}
            />
            {listing.features.includes("Host Is Superhost") ? (
              <Superhost
                width={20}
                height={20}
                fill={Colors.dark}
                style={{ position: "absolute", left: 25, bottom: 12 }}
              />
            ) : (
              ""
            )}
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 15.5 }}>
                Hosted by {listing.host_name}
              </Text>
              <Text
                style={{
                  color: Colors.gray,
                  fontFamily: "Nunito_500Medium",
                  fontSize: 12,
                }}
              >
                {listing.features.includes("Host Is Superhost")
                  ? "Superhost · "
                  : ""}
                {getYear(listing.host_since)} years hosting
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              borderBottomColor: Colors.gray,
              borderBottomWidth: 1,
              gap: 15,
              paddingVertical: 15,
            }}
          >
            {listing.amenities.includes("Pool") ? (
              <View style={{ flexDirection: "row", gap: 15 }}>
                <Dive width={25} height={25} fill={"black"} />
                <View>
                  <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 15 }}>
                    Drive right in
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito_500Medium",
                      fontSize: 12,
                      color: Colors.gray,
                    }}
                  >
                    This is one of the few places in the area with a pool
                  </Text>
                </View>
              </View>
            ) : (
              ""
            )}

            {listing.amenities.includes("Self Check-In") ? (
              <View style={{ flexDirection: "row", gap: 15 }}>
                <SelfCheck width={25} height={25} fill={"black"} />
                <View>
                  <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 15 }}>
                    Self check-in
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito_500Medium",
                      fontSize: 12,
                      color: Colors.gray,
                    }}
                  >
                    You can check in with the building staff.
                  </Text>
                </View>
              </View>
            ) : (
              ""
            )}
            {listing.features.includes("Host Is Superhost") ? (
              <View style={{ flexDirection: "row", gap: 15 }}>
                <Super width={25} height={25} fill={"black"} />
                <View>
                  <Text style={{ fontFamily: "Nunito_700Bold" }}>
                    {listing.features.includes("Host Is Superhost")
                      ? `${listing.host_name + " " + "is a Superhost"}`
                      : ""}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito_500Medium",
                      fontSize: 12,
                      color: Colors.gray,
                    }}
                  >
                    Superhost are experienced, highly rated Hosts.
                  </Text>
                </View>
              </View>
            ) : (
              ""
            )}

            <View style={{ flexDirection: "row", gap: 15 }}>
              <Cancel width={25} height={25} fill={"black"} />
              <Text style={{ fontFamily: "Nunito_700Bold" }}>
                The cancellation policy is {listing.cancellation_policy}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              borderBottomColor: Colors.gray,
              borderBottomWidth: 1,
              gap: 15,
              paddingVertical: 15,
            }}
          >
            <Text>
              {listing.summary}{" "}
              {listing.notes === null ? null : (
                <Text
                  onPress={handlePresentModalPress}
                  style={{
                    fontFamily: "Nunito_700Bold",
                    textDecorationLine: "underline",
                  }}
                >
                  See More
                </Text>
              )}
            </Text>
            <View>
              <About
                listing={listing}
                bottomSheetModalRef={bottomSheetModalRef}
              />
            </View>
          </View>

          <View style={{marginHorizontal: 20, paddingVertical: 15,gap:10}}>
            <Text style={{fontFamily:"Nunito_700Bold",fontSize:16}}>What this place offers</Text>
            <Offer listing={listing} />
          </View>

          <View style={{marginHorizontal: 20, paddingVertical: 15,gap:10,borderRadius:20}}>
            <MapView  initialRegion={{latitude:listing.geolocation.lat,longitude:listing.geolocation.lon,latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,}} showsMyLocationButton={true} style={{width:"100%", height:400}}>
      <Marker coordinate={{
                latitude:listing.geolocation.lat,
                longitude: listing.geolocation.lon 
              }} />
      </MapView>
          </View>

          <View style={{paddingVertical: 15,gap:10,backgroundColor:"#f0efe9"}}>
            <Host listing={listing} />
          </View>
          <View style={{marginHorizontal:20}}>
            <Text style={{fontFamily:"Nunito_500Medium"}}>Report this listing</Text>
          </View>
        </Animated.ScrollView>
        <Animated.View style={{padding:10}} entering={SlideInDown.delay(500)}>
              <Text>Im the footer</Text>
        </Animated.View>
        <StatusBar barStyle="default" backgroundColor={"rgba(0,0,0,0.5)"} />
      </View>
    </BottomSheetModalProvider>
  );
};

export default Details;
const styles = StyleSheet.create({
 header: {
  backgroundColor:"white",
  height:85,
  borderBottomColor:Colors.border,
  borderBottomWidth:0.5
  },
});


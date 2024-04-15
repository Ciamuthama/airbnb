import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
  StatusBar
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import axios from 'axios';
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import ListingData from "@/assets/data/airbnb-listings.json";
import { ListingList } from "@/constants/listingsitems";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import Colors from "@/constants/Colors";
import Dive from "@/assets/images/dive.svg";
import Star from "@/assets/images/star.svg";
import Superhost from "@/assets/images/Superhost.svg";
import SelfCheck from "@/assets/images/SelfCheck.svg";
import Cancel from "@/assets/images/Cancel.svg";
import Super from "@/assets/images/Super.svg";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import About from "../(modals)/about";
import Offer from "../(modals)/Offer";
import MapView from "react-native-maps";

const Details = ({ items }: any) => {
  const router = useRouter();
  const { width } = Dimensions.get("window");
  const { id } = useLocalSearchParams();


   const listing: ListingList = (ListingData as any).find(
    (item: any) => item.id === id
  );

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
        <Animated.ScrollView showsVerticalScrollIndicator={false}>
          <Animated.Image
            source={{ uri: listing.xl_picture_url }}
            style={{ position: "relative", height: 300, width }}
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
                Hosted by {listing.host_name}{" "}
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

          {/* <View style={{marginHorizontal: 20, paddingVertical: 15,gap:10}}>
            <MapView style={{width:"100%", height:"100%"}}/>
          </View> */}
        </Animated.ScrollView>
        <StatusBar barStyle="default" translucent={true} />
      </View>
    </BottomSheetModalProvider>
  );
};

export default Details;

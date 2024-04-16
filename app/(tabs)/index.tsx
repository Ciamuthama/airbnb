import {
  View,
  Text,
  StatusBar,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { Link, Stack } from "expo-router";
import Exploreheader from "@/components/exploreheader";
import Listing from "@/components/Listing";
import ListingData from "@/assets/data/airbnb-listings.json";
import MapComponent from "@/components/MapComponent";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import Map from "@/assets/images/Map.svg";
import List from "@/assets/images/List.svg";

const Explore = () => {
  const [category, setCategory] = React.useState("Island");
  const items = React.useMemo(() => ListingData as any, []);

  const onDataChange = (category: string) => {
    setCategory(category);
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const CONTENT_HEIGHT = Dimensions.get("screen").height;

  const snapPoints = useMemo(() => ["15%", CONTENT_HEIGHT], []);

  React.useEffect(() => {
    bottomSheetModalRef.current?.snapToIndex(0);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.snapToIndex(0);
  }, []);
  const handlePresentModalOpen = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Stack.Screen
          options={{
            header: () => <Exploreheader onCategoryChange={onDataChange} />,
          }}
        />
       

        <View style={{ backgroundColor: "white" }}>
        
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
            detached={true}
          >
            <BottomSheetFlatList showsVerticalScrollIndicator={false}
              renderItem={() => (
                <Listing Listings={items} category={category} />
              )}
              data={items}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                position: "absolute",
                bottom: 20,
                width: "100%",
                elevation: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  backgroundColor: Colors.dark,
                  padding: 15,
                  alignItems: "center",
                  borderRadius: 30,
                  gap: 10,
                }}
                onPress={handlePresentModalPress}
              >
                <Text style={{ color: "white", fontFamily: "Nunito_700Bold" }}>
                  Open Map
                </Text>
                <Map width={18} height={18} color="white" />
              </TouchableOpacity>
            </View>
          </BottomSheetModal>

        </View>
        <MapComponent Listing={items} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            bottom: 20,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: Colors.dark,
              padding: 15,
              alignItems: "center",
              borderRadius: 30,
              gap: 10,
            }}
            onPress={handlePresentModalOpen}
          >
            <Text style={{ color: "white", fontFamily: "Nunito_700Bold" }}>
              Show List
            </Text>
            <List width={18} height={18} color="white" />
          </TouchableOpacity>
        </View>
        <StatusBar barStyle={"dark-content"} />
      </View>
    </BottomSheetModalProvider>
  );
};

export default Explore;

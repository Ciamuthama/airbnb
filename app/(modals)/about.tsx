import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import { ListingList } from "@/constants/listingsitems";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";

const About = ({ listing, bottomSheetModalRef }: any) => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const list: ListingList = listing;
  const snapPoints = useMemo(() => ["90%", "90%"], []);




  return (
    <View>
      <BottomSheetModal ref={bottomSheetModalRef} snapPoints={snapPoints}>
        <BottomSheetScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20,marginVertical:20 }}>
          <View style={{gap:20}}>
            <Text style={{ fontFamily: "Nunito_600SemiBold" }}>
            {list.summary}
          </Text>

          {list.neighborhood_overview === null? null: <View>
            <Text style={{ fontFamily: "Nunito_600SemiBold" }}>The space</Text>
            <Text style={{ fontFamily: "Nunito_600SemiBold" }}>
              {list.neighborhood_overview}
            </Text>
          </View>}

          {list.access === null ? null: (<View>
            <Text style={{ fontFamily: "Nunito_600SemiBold" }}>
              Guest access
            </Text>
            <Text style={{ fontFamily: "Nunito_600SemiBold" }}>
              {list.access}
            </Text>
          </View>)}

          <View>
            <Text style={{ fontFamily: "Nunito_600SemiBold" }}>
              Other things to note
            </Text>
            <Text style={{ fontFamily: "Nunito_600SemiBold" }}>
              {list.notes}
            </Text>
          </View></View>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );
};

export default About;

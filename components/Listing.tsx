import {
  View,
  Image,
  Text,
  FlatList,
  ListRenderItem,
} from "react-native";
import React, {  } from "react";
import { Link } from "expo-router";
// import { Image } from 'expo-image'
import { ListingList } from "@/constants/listingsitems";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";


interface Props {
  Listings: any[];
  category: string;
}
const Listing = ({ Listings: items, category }: Props) => {
  const [loading, setLoading] = React.useState(true);
  const listRef = React.useRef<FlatList>(null);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [category]);

 
  const RenderItems: ListRenderItem<ListingList> = ({ item }) => {
    return (
      <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
        <Link href={`/listing/${item.id}`} asChild>
          <TouchableOpacity activeOpacity={0.9}>
            <Animated.View entering={FadeInRight} exiting={FadeOutLeft}>
              <Image
                source={{ uri: item.xl_picture_url }}
                style={{ height: 300, width: "100%", borderRadius: 12 }}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: 270,
                  right: 5,
                  zIndex: 1000,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="heart-outline" size={24} color="white" />
                <Ionicons
                  name="heart"
                  size={20}
                  color="#0202027a"
                  style={{ position: "absolute" }}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontFamily: "Nunito_700Bold" }}>
                    {item.smart_location}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito_600SemiBold",
                      color: Colors.gray,
                      fontSize: 15,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontFamily: "Nunito_700Bold" }}>
                    ${item.price}{" "}
                    <Text style={{ color: Colors.gray, fontWeight: "400" }}>
                      night
                    </Text>
                  </Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </Link>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        ref={listRef}
        data={loading ? [] : items}
        renderItem={RenderItems}
      />
    </View>
  );
};

export default Listing;

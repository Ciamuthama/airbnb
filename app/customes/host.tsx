import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ListingList } from "@/constants/listingsitems";
import Colors from "@/constants/Colors";
import Verify from "@/assets/images/Verify.svg";
import SuperBlack from "@/assets/images/SuperBlack.svg";
import Protect from "@/assets/images/Protect.svg";
import { Link } from "expo-router";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

const Host = ({ listing }: any) => {
  const host: ListingList = listing;

  const getYear = (date: any) => {
    const d = new Date(date);
    return new Date().getFullYear() - d.getFullYear();
  };
  return (
    <View style={{ marginHorizontal: 20,gap:20 }}>
      <Text
        style={{ fontFamily: "Nunito_700Bold", fontSize: 18}}
      >
        Meet your Host
      </Text>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 20,
          borderRadius: 30,
          elevation: 2,
        }}
      >
        <View style={{ gap: 5 }}>
          <View
            style={{
              position: "absolute",
              right: -10,
              top: 80,
              zIndex: 1000,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              backgroundColor: Colors.primary,
              width: 20,
              height: 20,
              borderRadius: 100,
              elevation: 2,
            }}
          >
            <Verify width={20} height={20} fill={"white"} />
          </View>
          <Image
            source={{ uri: host.host_picture_url }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              position: "relative",
            }}
            resizeMode="cover"
          />
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Nunito_700Bold",
              fontSize: 20,
              position: "relative",
            }}
          >
            {host.host_name}
          </Text>
          {host.features.includes("Host Is Superhost") ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SuperBlack width={10} height={10} fill={"black"} />
              <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 10 }}>
                {" "}
                Superhost
              </Text>
            </View>
          ) : (
            ""
          )}
        </View>
        <View>
          <View
            style={{
              borderBottomColor: Colors.border,
              borderBottomWidth: 0.5,
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Nunito_700Bold",
              }}
            >
              {host.number_of_reviews}
            </Text>
            <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 10 }}>
              Reviews
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: Colors.border,
              borderBottomWidth: 0.5,
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Nunito_700Bold",
              }}
            >
              {host.review_scores_rating / 20} <Ionicons name="star" />
            </Text>
            <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 10 }}>
              Rating
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Nunito_700Bold",
              }}
            >
              {getYear(host.host_since)}
            </Text>
            <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 10 }}>
              Years hosting
            </Text>
          </View>
        </View>
      </View>
      <View style={{gap:20}}>
        <View>
            <Text ellipsizeMode="tail" numberOfLines={2} style={{fontFamily:"Nunito_500Medium"}}>{host.host_about}</Text>
        </View>
        <Link href={".."} style={{fontFamily:"Nunito_700Bold",textDecorationLine:"underline",textDecorationColor:"black"}}>Show more</Link>
       { host.features.includes("Host Is Superhost") ?
       <View>
        <Text style={{fontFamily:"Nunito_700Bold",fontSize:15,paddingBottom:10}}>{host.host_name} is a Superhost</Text>
            <Text>Superhosts are experienced, highly rated hosts who are committed to providing great stay for guests.</Text>
        </View>:""}
        <View>
            <Text style={{fontFamily:"Nunito_700Bold",fontSize:15,paddingBottom:10}}>Host details</Text>
            <Text style={{fontFamily:"Nunito_500Medium"}}>Response rate: {host.host_response_rate}%</Text>
            <Text style={{fontFamily:"Nunito_500Medium"}}>Response {host.host_response_time}</Text>
        </View>
        <View style={{marginTop:10}}>
            <TouchableOpacity style={{backgroundColor:Colors.dark,borderRadius:10,padding:15,width:"35%"}}>
            <Text style={{fontFamily:"Nunito_700Bold",fontSize:15,color:"white",textAlign:"center"}}>Message Host</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",gap:10,marginRight:20}}>
            <Protect width={20} height={20} />
            <Text style={{fontFamily:"Nunito_600SemiBold",fontSize:10,color:"#222222"}}>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</Text>
        </View>
      </View>
    </View>
  );
};

export default Host;

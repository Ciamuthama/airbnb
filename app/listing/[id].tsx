import { View, Text, Image, TouchableOpacity,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import ListingData from "@/assets/data/airbnb-listings.json"
import { ListingList } from '@/constants/listingsitems'
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import Colors from '@/constants/Colors'
import Dive from "@/assets/images/dive.svg"
import Star from "@/assets/images/star.svg"
import Superhost from "@/assets/images/Superhost.svg"
import SelfCheck from "@/assets/images/SelfCheck.svg"
import Cancel from "@/assets/images/Cancel.svg"

const Details = ({items}:any) => {
  const router = useRouter();
  const {width} = Dimensions.get("window")
    const {id} = useLocalSearchParams<{id: string}>();
    const listing: ListingList  = (ListingData as any).find((item: any) => item.id === id)

    const getYear = (date: any) => {
      const d = new Date(date);
      return (new Date().getFullYear() - d.getFullYear());
    };
  return (
    <View>
      <Animated.ScrollView>
        <Animated.Image source={{uri: listing.xl_picture_url}} style={{position:'relative',height:300,width}}/> 
      <View style={{marginVertical:15,marginHorizontal:20,borderBottomColor:Colors.gray,borderBottomWidth:1,paddingBottom:15}}>
        <Text style={{fontFamily:"Nunito_600Bold",fontSize:20}}>{listing.name}</Text>
        <Text style={{fontFamily:"Nunito_600SemiBold",fontSize:12,paddingTop:10}}>{listing.room_type} in {listing.smart_location}</Text>
      <View style={{flexDirection:"row",alignItems:"center"}}>  
        <Text style={{fontFamily:"Nunito_500Medium",fontSize:12}}>{listing.accommodates}+ guests</Text>
        <Entypo name="dot-single" size={10} color={Colors.gray} />
        <Text style={{fontFamily:"Nunito_500Medium",fontSize:12}}>{listing.bedrooms} bedrooms</Text>
        <Entypo name="dot-single" size={10} color={Colors.gray} />
        <Text style={{fontFamily:"Nunito_500Medium",fontSize:12}}>{listing.beds} beds</Text>
        <Entypo name="dot-single" size={10} color={Colors.gray} />
        <Text style={{fontFamily:"Nunito_500Medium",fontSize:12}}>{listing.bathrooms} baths</Text>
        </View>
       <View style={{alignItems:"center",flexDirection:"row",marginTop:5,gap:5}}> 
       <View style={{alignItems:"center",flexDirection:"row",gap:3}}>
       <Star width={14} height={14} fill={Colors.dark} />
        <Text style={{fontFamily:"Nunito_700Bold",fontSize:12,textAlign:"center"}}>
          {listing.review_scores_rating/20}
          </Text>
          </View>
          <Entypo name="dot-single" size={10} color={Colors.dark} />
        <Text style={{fontFamily:"Nunito_700Bold",fontSize:12,borderBottomWidth:1,borderBottomColor:Colors.gray}}>
          {listing.number_of_reviews} reviews
          </Text>
        </View>
        </View>
        <View style={{flexDirection:"row",gap:15,marginHorizontal:20,paddingVertical:15,borderBottomColor:Colors.gray,borderBottomWidth:1}}>
          <Image source={{uri: listing.host_picture_url}} style={{height:40,width:40,borderRadius:20}}/>
          {listing.features.includes("Host Is Superhost") ? <Superhost width={20} height={20} fill={Colors.dark} style={{position:"absolute",left:25,bottom:12}}/> :""}
          <View style={{flexDirection:"column"}}>
            <Text style={{fontFamily:"Nunito_700Bold",fontSize:15.5}}>Hosted by {listing.host_name} </Text>
          <Text style={{color:Colors.gray,fontFamily:"Nunito_500Medium",fontSize:12}}>{listing.features.includes("Host Is Superhost") ? "Superhost · ":""}{getYear(listing.host_since) } years hosting</Text></View>
        </View>

        <View style={{justifyContent:"center",marginHorizontal:20,borderBottomColor:Colors.gray,borderBottomWidth:1,gap:5,paddingVertical:15}}>
          {listing.amenities.includes("Pool")? 
        <View style={{flexDirection:"row",gap:15}}>
          <Dive width={25} height={25} fill={"black"}/>
          <View>
            <Text style={{fontFamily:"Nunito_700Bold",fontSize:15}}>Drive right in</Text>
          <Text  style={{fontFamily:"Nunito_500Medium",fontSize:12,color:Colors.gray}}>This is one of the few places in the area with a pool</Text>
          </View>
        </View>
        :""}

        {listing.amenities.includes("Self Check-In")?
      <View style={{flexDirection:"row",gap:15}}>
        <SelfCheck width={25} height={25} fill={"black"}/>
        <View>
          <Text style={{fontFamily:"Nunito_700Bold",fontSize:15}}>Self check-in</Text>
          <Text  style={{fontFamily:"Nunito_500Medium",fontSize:12,color:Colors.gray}}>You can check in with the building staff</Text>
          </View>
      </View>  
      
     :"" }
          <Text style={{fontFamily:"Nunito_600SemiBold",fontSize:12}}>
            {listing.features.includes("Host Is Superhost") ? `${listing.host_name +" " + 'is a Superhost'}` : ""}
          </Text>
         <View style={{flexDirection:"row",gap:15}}>
          <Cancel width={25} height={25} fill={"black"}/>
          <Text style={{fontFamily:"Nunito_700Bold"}}>The cancellation policy is {listing.cancellation_policy}</Text>
          </View>
          </View>
        </Animated.ScrollView>
        <StatusBar style="light" />
    </View>
  )
}

export default Details
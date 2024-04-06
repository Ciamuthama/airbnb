import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { Ionicons,Entypo  } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { category } from '@/constants/Category';

 

const Exploreheader = () => {

   


  return (
    <SafeAreaView style={{flex:1,marginBottom:150,backgroundColor: "white"}}>
    <View style={{height:150}}>
      <View style={{backgroundColor: "white", height:50,marginHorizontal:20, borderRadius:50,borderWidth:0.2,borderColor:'gray',elevation:3, paddingHorizontal:10,marginTop:10,justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
        <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={{flexDirection:"row",alignItems:"center", gap:10}}>
            <Ionicons name="search" size={24} color="black" />
            <View>
                <View>
                    <Text style={{fontWeight:"600",fontFamily:"SpaceLato"}}>Anywhere</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:5,alignItems:"center",gap:5}}>
                    <Text style={{color:"gray", fontFamily:"SpaceLato"}}>Any Week</Text>
                    <Entypo name="dot-single" size={15} color="gray" />
                    <Text style={{color:"gray",fontFamily:"SpaceLato"}}>Any guest</Text>
                </View>
            </View>
            </TouchableOpacity>
        </Link>
        <TouchableOpacity style={{borderColor:"gray", borderWidth:1,borderRadius:100,padding:4 }}>
         <Ionicons name="options" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={{marginHorizontal:10,}}>
        {category.map((a,b)=>( 
         <View key={b} style={{justifyContent:"center",alignItems:"center"}}> 
         <Image source={a.icon} style={{height:25,width:25,marginBottom:5}}/>
         <Text style={{marginHorizontal:10,fontFamily:"SpaceLato",fontWeight:"500",fontSize:12}}>{a.name}</Text>
         </View>
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
   
  )
}

export default Exploreheader
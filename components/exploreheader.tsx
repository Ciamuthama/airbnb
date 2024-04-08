import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { Ionicons,Entypo  } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { category } from '@/constants/Category';
import * as Haptic from 'expo-haptics';

interface Props {
  onCategoryChange : (category:string)=>void;
}
 

const Exploreheader = ({onCategoryChange}:Props) => {
const ref = React.useRef<Array<TouchableOpacity | null>>([]);
const [activeIndex,setActiveIndex] = React.useState(0);

const selectCategory = (index: number)=>{
  setActiveIndex(index)

  Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light);
  onCategoryChange(category[index].name)
}
  return (
    <SafeAreaView style={{flex:1,marginBottom:150,backgroundColor: "white"}}>
    <View style={{height:120}}>
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
      <ScrollView horizontal style={{marginHorizontal:20,}}  showsHorizontalScrollIndicator={false}>
        {category.map((a,b)=>( 
         <TouchableOpacity key={b} onPress={()=>selectCategory(b)} activeOpacity={0.9} ref={(el)=>ref.current[b] = el} style={activeIndex === b ? styles.activeBtn : styles.inactiveBtn}> 
         <Image source={a.icon} style={activeIndex === b ? styles.activeImage : styles.inactiveImage}/>
         <Text style={activeIndex === b ? styles.activeText : styles.inactiveText}>{a.name}</Text>
         </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
   
  )
}

export default Exploreheader

const styles = StyleSheet.create({
  activeBtn:{
    borderBottomColor:"black",
    borderBottomWidth:2,
    justifyContent:'center',
    alignItems:"center"
  },
  activeImage:{
    tintColor:"black",
    height:25,width:25,marginBottom:5
  },
  inactiveImage:{
    tintColor:"gray",
    height:25,width:25,marginBottom:5
  },
  inactiveBtn:{
    color:"gray",
    tintColor:"gray",
    justifyContent:'center',
    alignItems:"center"
  },
  activeText:{
    marginHorizontal:10,fontFamily:"SpaceLato",fontWeight:"500",fontSize:12
  },
  inactiveText:{
    marginHorizontal:10,fontFamily:"SpaceLato",fontWeight:"500",fontSize:12,color:"gray"
  }
})
import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { Ionicons,Entypo  } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { category } from '@/constants/Category';
import * as Haptic from 'expo-haptics';
import Colors from '@/constants/Colors';

interface Props {
  onCategoryChange : (category:string)=>void;
}
 

const Exploreheader = ({onCategoryChange}:Props) => {
const ref = React.useRef<Array<TouchableOpacity | null>>([]);
const scrollRef = React.useRef<ScrollView>(null);
const [activeIndex,setActiveIndex] = React.useState(0);

  const selectCategory = (index: number)=>{
  const selected = ref.current[index];
  setActiveIndex(index)

 selected?.measure((pageX)=>{
  scrollRef.current?.getScrollableNode().scrollTo({x: pageX-20, y:0, animated:true})
 })

  Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light);
  onCategoryChange(category[index].name)
}
  return (
    <SafeAreaView style={{flex:1,marginBottom:130,backgroundColor: "white",paddingBottom:6.5}}>
    <View style={{height:135,backgroundColor: "white"}}>
      <View style={{alignItems:"center",justifyContent:"space-around" ,flexDirection:"row"}}>
        <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={{flexDirection:"row",alignItems:"center", gap:5,backgroundColor: "white",borderRadius:50,borderWidth:0.2,borderColor:'gray',elevation:3, paddingHorizontal:10,marginTop:10,height:60}}>
            <Ionicons name="search" size={24} color="black" />
            <View>
                <View>
                    <Text style={{fontFamily:"Nunito_700Bold"}}>Anywhere</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:5,justifyContent:'center',gap:5,paddingRight:35}}>
                    <Text style={{color:Colors.gray, fontFamily:"Nunito_500Medium"}}>Any Week</Text>
                    <Entypo name="dot-single" size={15} color={Colors.gray} />
                    <Text style={{color:Colors.gray,fontFamily:"Nunito_500Medium"}}>Any guest</Text>
                    <Entypo name="dot-single" size={15} color={Colors.gray} />
                    <Text style={{color:Colors.gray,fontFamily:"Nunito_500Medium"}}>Any guest</Text>
                </View>
            </View>
            </TouchableOpacity>
        </Link>
        <TouchableOpacity style={{borderColor:"gray",top:5,borderWidth:1,borderRadius:100,padding:7,justifyContent:"center",alignItems:"center" }}>
         <Ionicons name="options-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={{marginHorizontal:20}} showsHorizontalScrollIndicator={false} ref={scrollRef}>
        {category.map((a,b)=>( 
         <TouchableOpacity key={b} onPress={()=>selectCategory(b)} activeOpacity={0.9} ref={(el)=>ref.current[b] == el} style={activeIndex == b ? styles.activeBtn : styles.inactiveBtn}> 
         <Image source={a.icon} style={activeIndex == b ? styles.activeImage : styles.inactiveImage}/>
         <Text style={activeIndex == b ? styles.activeText : styles.inactiveText}>{a.name}</Text>
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
    height:25,
    width:25,
    marginBottom:5
  },
  inactiveImage:{
    tintColor:"gray",
    height:25,
    width:25,
    marginBottom:5
  },
  inactiveBtn:{
    color:"gray",
    tintColor:"gray",
    justifyContent:'center',
    alignItems:"center"
  },
  activeText:{
    marginHorizontal:10,
    fontFamily:"Nunito_500Medium",
    fontSize:10
  },
  inactiveText:{
    marginHorizontal:10,
    fontFamily:"Nunito_500Medium",
    fontSize:10,
    color:"gray"
  }
})
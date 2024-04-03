import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/hook/useWarmUpBrowser'
import { TextInput } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const Login = () => {
    useWarmUpBrowser()
  return (
    <View style={{flex:1, marginHorizontal:10}}>
      <Text style={{fontWeight:"700", fontSize:24,fontFamily:"SpaceLato"}}>Welcome to Airbnb</Text>
      <View style={{borderRadius:10, borderColor:'gray', borderWidth:1.5,paddingVertical:10,marginTop:20}}>
        <TextInput placeholder="Email" autoComplete='email' keyboardType="email-address" style={{marginHorizontal:20}}/>
      </View>
      <View style={{borderRadius:10, borderColor:'gray', borderWidth:1.5,paddingVertical:10,marginTop:20}}>
        <TextInput placeholder="Password" secureTextEntry={true}  style={{marginHorizontal:20}}/>
      </View>
      <Text style={{marginVertical:10,fontFamily:"SpaceLato"}}>We'll call or text you to confirm your number. Standard message and data rates apply. <Link href={'..'}><Text style={{color:'black',fontWeight:"bold",textDecorationLine:"underline"}}>Privacy Policy</Text></Link></Text>
      <TouchableOpacity style={{backgroundColor:Colors.primary,padding:13,borderRadius:10, marginVertical:10}}>
        <Text style={{textAlign:'center', color:'white',fontSize:17,fontFamily:"SpaceLato"}}>Continue</Text>
      </TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center',marginVertical:10}}>
          <View style={{borderColor:"gray",borderWidth:1, width:175,marginRight:10}}></View>
          <Text style={{fontWeight:"500", fontFamily:"SpaceLato"}}>or</Text>
        <View style={{borderColor:"gray",borderWidth:1,width:175, marginLeft:10}}></View>
        </View>
      </View>
  )
}

export default Login
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons,FontAwesome5,FontAwesome6  } from '@expo/vector-icons'



const Layout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:Colors.primary,tabBarLabelStyle:{fontFamily:"SpaceLato"}}} initialRouteName="index">
      <Tabs.Screen name="explore"  options={{title:'Explore', tabBarIcon:({color,size})=> <Ionicons name="search" size={size} color={color}/>}}/>
      <Tabs.Screen name="wishlist" options={{title:'Wishlist', tabBarIcon:({color,size})=> <FontAwesome6 name="heart" size={size} color={color}/>}}/>
      <Tabs.Screen name="index" options={{title:'Trips',tabBarIcon:({color,size})=> <FontAwesome5 name="airbnb" size={size} color={color} />}}/>
      <Tabs.Screen name="inbox" options={{title:'Inbox',tabBarIcon:({color,size})=> <FontAwesome5 name="comment-alt" size={size} color={color} />}}/>
      <Tabs.Screen name="profile" options={{title:'Profile',tabBarIcon:({color,size})=> <Ionicons name="person-circle-outline" size={size} color={color}/>}}/>
    </Tabs>
  )
}

export default Layout
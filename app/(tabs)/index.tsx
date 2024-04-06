import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import Exploreheader from '@/components/exploreheader'
import Listing from '@/components/Listing'

const Explore = () => {
  return (
    <View style={{flex:1}}>
     <Stack.Screen options={{header:()=><Exploreheader/>}}/>
     <Listing/>
    </View>
  )
}

export default Explore
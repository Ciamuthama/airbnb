import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import Exploreheader from '@/components/exploreheader'
import Listing from '@/components/Listing'
import ListingData from '@/assets/data/airbnb-listings.json'

const Explore = () => {
  const [category,setCategory] = React.useState('Island')
  const items = React.useMemo(()=> ListingData as any,[])
  const onDataChange = (category:string) => {
   
    setCategory(category)
  }
  
  return (
    <View style={{flex:1,backgroundColor: "white"}}>
     <Stack.Screen options={{header:()=><Exploreheader onCategoryChange={onDataChange} />}} />
     <Listing Listings={items} category={category} />
     <StatusBar barStyle={'dark-content'} />
    </View>
  )
}

export default Explore
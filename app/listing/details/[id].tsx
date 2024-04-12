import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { ListingList } from '@/constants/listingsitems';
import ListingData from "@/assets/data/airbnb-listings.json"


const More = () => {
    const {id} = useLocalSearchParams<{id: string}>();
    const listing: ListingList  = (ListingData as any).find((item: any) => item.id === id)
  return (
    <View>
      <Text>{listing.neighborhood_overview}</Text>
       <Text>{listing.space}</Text>
      <Text>{listing.access}</Text>

    </View>
  )
}

export default More
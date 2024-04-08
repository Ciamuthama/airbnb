import { View, Text, ScrollView, FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { ListingList } from '@/constants/listingsitems'

interface Props{
  Listings:any[],
  category:string
}
const Listing = ({Listings,category}:Props) => {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    console.log('Listing', category)
  }, [category])

  const RenderItems:ListRenderItem<ListingList> = ({item}) => {
    return (
      <View>
        <Link href={`/listing/${item.id}`}>
        <Image source={{uri: item.xl_picture_url}} style={{height:300,width:500}}/>  
        </Link>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        data={Listings}
        keyExtractor={(list) => list.id}
        renderItem={RenderItems}
      />
    </View>
  );
}

export default Listing
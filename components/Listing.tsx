import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

interface Props{
  Listings:any[],
  category:string
}
const Listing = ({Listings,category}:Props) => {
  React.useEffect(() => {
    console.log('Listing', category)
  }, [category])

  return (
    <View>
      <FlatList
        data={Listings}
        keyExtractor={(list) => list.id}
        renderItem={({ item }) => <Text>{item.host_location}</Text>}
      />
    </View>
  );
}

export default Listing
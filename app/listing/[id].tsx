import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Details = ({items}:any) => {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default Details
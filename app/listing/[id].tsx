import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Details = () => {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>Details{id}</Text>
    </View>
  )
}

export default Details
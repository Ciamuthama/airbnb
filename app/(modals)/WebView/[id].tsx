import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'

const HostWebView = () => {
 const {id} = useLocalSearchParams()
  return (
  <SafeAreaView style={{ flex: 1 }}>
    <WebView source={{ uri: `https://www.airbnb.com/users/show/${id}` }} style={{ flex: 1,width:"100%",height:"100%" }} />
    </SafeAreaView>
  )
}

export default HostWebView
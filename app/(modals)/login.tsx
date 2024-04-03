import { View, Text } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/hook/useWarmUpBrowser'

const Login = () => {
    useWarmUpBrowser()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
    </View>
  )
}

export default Login
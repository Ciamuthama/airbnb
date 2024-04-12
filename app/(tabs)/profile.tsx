import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  const {signOut, isSignedIn} = useAuth()
  return (
    <View>
      <Button title='Log Out' onPress={() => signOut()} />
       {!isSignedIn && 
       <Link href={'/(modals)/login'}>
        <Text>Log in</Text>
        </Link>}
        <StatusBar style="dark" />
    </View>
  )
}

export default Profile
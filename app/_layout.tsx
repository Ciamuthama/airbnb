import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import "../global.css"
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as SecureStore from "expo-secure-store"
const CLERK_PUBLISHABLE_KEY= process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const tokenCache = {
  getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      console.log(err);
      ;
    }
  },
  saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.log(err);
    }
  },
};

import {
	// Import the creation function
	createStackNavigator,
	// Import the types
	StackNavigationOptions
} from '@react-navigation/stack'
import { withLayoutContext } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo';
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceLato: require('../assets/fonts/NunitoSans.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return( <ClerkProvider
  tokenCache={tokenCache}
  publishableKey={CLERK_PUBLISHABLE_KEY!}
>
    <RootLayoutNav />
  </ClerkProvider>
  )
}

const { Navigator } = createStackNavigator()

// This can be used like `<JsStack />`
export const JsStack = withLayoutContext<
	StackNavigationOptions,
	typeof Navigator
>(Navigator)


function RootLayoutNav() {
const router = useRouter()

const {isLoaded,isSignedIn} = useAuth()

React.useEffect(()=>{
if(isLoaded && !isSignedIn){
router.push('/(modals)/login')
}
},[isLoaded])

  return (
      <JsStack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/login" options={{ title:'Login or sign up', presentation:"modal", animation: "fade", headerLeft: ()=>(
          <TouchableOpacity onPress={()=>router.back()}><Ionicons name='close-outline' size={24}/></TouchableOpacity>
        ) }} />
        <Stack.Screen name='(modals)/booking' options={{presentation:'transparentModal', headerLeft: ()=>(
          <TouchableOpacity onPress={()=>router.back()}><Ionicons name='close-outline' size={24}/></TouchableOpacity>
        )}}/>
      </JsStack>
  );
}

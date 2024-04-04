import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hook/useWarmUpBrowser";
import { TextInput } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useOAuth, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { AntDesign,FontAwesome6,FontAwesome } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text
        style={{ fontWeight: "700", fontSize: 24, fontFamily: "SpaceLato" }}
      >
        Welcome to Airbnb
      </Text>
      <View
        style={{
          borderRadius: 10,
          borderColor: "gray",
          borderWidth: 1.5,
          paddingVertical: 10,
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          style={{ marginHorizontal: 20 }}
        />
      </View>
      <View
        style={{
          borderRadius: 10,
          borderColor: "gray",
          borderWidth: 1.5,
          paddingVertical: 10,
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{ marginHorizontal: 20 }}
        />
      </View>
      <Text style={{ marginVertical: 10, fontFamily: "SpaceLato" }}>
        We'll call or text you to confirm your number. Standard message and data
        rates apply.
        <Link href={".."}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textDecorationColor: "black",
            }}
          >
            Privacy Policy
          </Text>
        </Link>
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primary,
          padding: 13,
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 17,
            fontFamily: "SpaceLato",
            fontWeight: "700",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
            width: 175,
            marginRight: 10,
          }}
        ></View>
        <Text style={{ fontFamily: "SpaceLato" }}>or</Text>
        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
            width: 175,
            marginLeft: 10,
          }}
        ></View>
      </View>
      <View style={{rowGap:10}}>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={onPress}>
        <FontAwesome name="phone" size={24} color="black" style={{ flexDirection:"column",right:93}} />
        <Text style={{textAlign:"center", fontWeight:"700",fontSize:16,fontFamily: "SpaceLato"}}> Continue with Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={onPress}>
        <AntDesign name="google" size={24} color="black" style={{ flexDirection:"column",right:90}} />
        <Text style={{textAlign:"center", fontWeight:"700",fontSize:16,fontFamily: "SpaceLato"}}> Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={onPress}>
        <AntDesign name="apple1" size={24} color="black" style={{ flexDirection:"column",right:93}} />
        <Text style={{textAlign:"center", fontWeight:"700",fontSize:16,fontFamily: "SpaceLato"}}> Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={onPress}>
        <AntDesign name="facebook-square" size={24} color="black" style={{ flexDirection:"column",right:78}} />
        <Text style={{textAlign:"center", fontWeight:"700",fontSize:16,fontFamily: "SpaceLato"}}> Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={onPress}>
        <FontAwesome6 name="microsoft" size={24} color="black" style={{ flexDirection:"column",right:77}} />
        <Text style={{textAlign:"center", fontWeight:"700",fontSize:16,fontFamily: "SpaceLato"}}> Continue with Microsoft</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={onPress}>
        <AntDesign name="linkedin-square" size={24} color="black" style={{ flexDirection:"column",right:80}} />
        <Text style={{textAlign:"center", fontWeight:"700",fontSize:16,fontFamily: "SpaceLato"}}> Continue with LinkedIn</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

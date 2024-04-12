import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hook/useWarmUpBrowser";
import { TextInput } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useOAuth, useSignUp,SignedIn } from "@clerk/clerk-expo";
import { AntDesign,FontAwesome6,FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

WebBrowser.maybeCompleteAuthSession();

enum Strategy{
  Google ="oauth_google",
  Facebook="oauth_facebook",
  Microsoft="oauth_microsoft",
  LinkedIn = "oauth_linkedin",
  Apple="oauth_apple",

}
const Login = () => {

  const {isLoaded, signUp,setActive} = useSignUp();
  const router = useRouter()
  const[emailAddress,setEmailAddress]=React.useState("")
  const [password, setPassword] =React.useState("")
  const [pendingVerification,setPendingVerification] = React.useState(false)
  const [code,setCode]=React.useState("")
  
  
  const {startOAuthFlow:googleAuth} = useOAuth({strategy:"oauth_google"})
  const {startOAuthFlow:microsoftAuth} = useOAuth({strategy:"oauth_microsoft"})
  const {startOAuthFlow:linkedinAuth} = useOAuth({strategy:"oauth_linkedin"})
  const {startOAuthFlow:facebookAuth} = useOAuth({strategy:"oauth_facebook"})
  const {startOAuthFlow:appleAuth} = useOAuth({strategy:"oauth_apple"})
  
  const onSelectedAuth = async(strategy:Strategy)=>{
      const selectedAuth={
        [Strategy.Google]:googleAuth,
        [Strategy.Microsoft]:microsoftAuth,
        [Strategy.LinkedIn]:linkedinAuth,
        [Strategy.Facebook]:facebookAuth,
        [Strategy.Apple]:appleAuth,
      }[strategy]

      try{
        const {createdSessionId,setActive} = await selectedAuth()
        
        if(createdSessionId){
            setActive!({session:createdSessionId})
            router.push("/")
        }
      }catch (err:any){
        alert("an error occurred  trying to connect you");;
      }
  }
  
  // const onSignUpPress=async()=>{
  //   if(!isLoaded){
  //     return;
  //   }

  //   try{
  //     await signUp.create({
  //       emailAddress,
  //       password,
  //     })
  //     await signUp.prepareEmailAddressVerification({strategy:"email_code"})

  //     setPendingVerification(true)
  //   } catch(err:any){
  //     alert("an error occurred  trying to connect you");
      
  //   }
  // }

  // const onPressVerify=async()=>{
  //   if(!isLoaded){
  //     return;
  //   }

  //   try{
  //     const completeSignUp = await signUp.attemptEmailAddressVerification({code})
  //     await setActive({session : completeSignUp.createdSessionId})
  //   } catch(err:any){
  //     alert("Please verify your code or try resending the code again");
  //   }
  // }



  useWarmUpBrowser();
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text
        style={{fontSize: 24, fontFamily: "Nunito_700Bold" }}
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
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          value={emailAddress}
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
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Text style={{ marginVertical: 10, fontFamily: "Nunito_500Medium" }}>
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
            fontFamily: "Nunito_600SemiBold",
            
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
        <Text style={{ fontFamily: "Nunito_600SemiBold" }}>or</Text>
        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
            width: 175,
            marginLeft: 10,
          }}
        >

        </View>
      </View>
   
      <View style={{rowGap:10}}>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={()=>onSelectedAuth(Strategy.Google)}>
        <FontAwesome name="phone" size={24} color="black" style={{ flexDirection:"column",right:93}} />
        <Text style={{textAlign:"center" ,fontSize:16,fontFamily: "Nunito_700Bold"}}> Continue with Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={()=>onSelectedAuth(Strategy.Google)}>
        <AntDesign name="google" size={24} color="black" style={{ flexDirection:"column",right:90}} />
        <Text style={{textAlign:"center" ,fontSize:16,fontFamily: "Nunito_700Bold"}}> Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={()=>onSelectedAuth(Strategy.Apple)}>
        <AntDesign name="apple1" size={24} color="black" style={{ flexDirection:"column",right:93}} />
        <Text style={{textAlign:"center",fontSize:16,fontFamily: "Nunito_700Bold"}}> Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={()=>onSelectedAuth(Strategy.Facebook)}>
        <AntDesign name="facebook-square" size={24} color="black" style={{ flexDirection:"column",right:78}} />
        <Text style={{textAlign:"center", fontSize:16,fontFamily: "Nunito_700Bold"}}> Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={()=>onSelectedAuth(Strategy.Microsoft)}>
        <FontAwesome6 name="microsoft" size={24} color="black" style={{ flexDirection:"column",right:77}} />
        <Text style={{textAlign:"center", fontSize:16,fontFamily: "Nunito_700Bold"}}> Continue with Microsoft</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:10,borderColor:'black', borderWidth:1,padding:13,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={()=>onSelectedAuth(Strategy.LinkedIn)}>
        <AntDesign name="linkedin-square" size={24} color="black" style={{ flexDirection:"column",right:80}} />
        <Text style={{textAlign:"center", fontSize:16,fontFamily: "Nunito_700Bold"}}> Continue with LinkedIn</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="dark"/>
    </View>
  );
};

export default Login;

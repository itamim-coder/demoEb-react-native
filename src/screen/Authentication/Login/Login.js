import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../../../../assets/consts/color";
import STYLES from "../../../../assets/styles/index"

import Icon from 'react-native-vector-icons/MaterialIcons';
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import {  useNavigation } from '@react-navigation/native';
// import * as Google from 'expo-google-app-auth';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  initializeFirebase();
  const auth = getAuth();

  const navigation = useNavigation()

  useEffect(()=>{
      auth.onAuthStateChanged(user =>{
          if (user) {
             navigation.navigate("TabNavigator")
          }
      })
  },[])

  const handleSignin =()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const user = result.user;
    })
    .catch(error => alert(error.message))
}    

// const persistLogin = (Credentials , message , status) =>{
//   AsynStorage
// }

//   const androidClientId = '372446808511-mtk4lj9967l1jidosiihfd4mikbhf3j9.apps.googleusercontent.com'
//   const iosClientId = '372446808511-in2sb88lu76kmrt179pbtccthl9phijj.apps.googleusercontent.com'

//   useEffect(()=>{
//     initAsync();
//   })


//   const initAsync = () =>{
//  async () => {
//   try {
//     await GoogleSignIn.initAsync({
//         clientId: Platform.OS === 'android' ? androidClientId : iosClientId, 
//     });
//     getUserDetails();
//   } catch ({message}) {
//     console.log("Google sign in error:" + message);

//   }
//  }
//   }

//     const getUserDetails = async () => {
//       const user = await GoogleSignIn.signInSilentlyAsync();
//       user, "google success"
//     }

//     const handleGoogleSignin = async () =>{
//       await GoogleSignIn.askForPlayServicesAsync();
//       const {type, user} = await GoogleSignIn.signInAsync();
//       if (type === 'success') {
//         getUserDetails();
//       } else {
//         alert('canceled')
//       }


//     }


// async function signInWithGoogleAsync  ()  {
//   try {
//     const result = await Google.logInAsync({
//       behavior: "system",
//       androidClientId: '372446808511-mtk4lj9967l1jidosiihfd4mikbhf3j9.apps.googleusercontent.com',
//       iosClientId: '372446808511-in2sb88lu76kmrt179pbtccthl9phijj.apps.googleusercontent.com',
//       scopes: ['profile', 'email'],
//     });

//     if (result.type === 'success') {
//       return result.accessToken;
//     } else {
//       return { cancelled: true };
//     }
//   } catch (e) {
//     return { error: true };
//   }
// }

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 100 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 25, color: COLORS.dark }}
          >
            Errand
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              color: COLORS.secondary,
            }}
          >
            BUDDY
          </Text>
        </View>

        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome Back!
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput 
              onChangeText={text => setEmail(text) }
            placeholder="Email" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity   onPress={handleSignin} style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign In
            </Text>
          </TouchableOpacity>
          </View>
          <View>

             <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
          
            <View style={{width: 10}}></View>
            {/* <GoogleSigninButton onPress={signIn}></GoogleSigninButton> */}
            <TouchableOpacity onPress={()=>signInWithGoogleAsync()} style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../../../assets/images/google.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // perspective: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

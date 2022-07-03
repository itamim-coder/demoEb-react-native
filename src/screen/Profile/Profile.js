import { View, Text,  TouchableOpacity, SafeAreaView, ScrollView, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import initializeFirebase from '../Authentication/Firebase/firebase.init';
import {  useNavigation } from '@react-navigation/native';
import STYLES from '../../../assets/styles';
import COLORS from '../../../assets/consts/color';


const Profile = ({navigation}) => {

  
  // const navigation = useNavigation();
  initializeFirebase();
    const auth = getAuth();

    const handleLogout=()=>{
   
      signOut(auth).then(() => {
        navigation.replace("Login")
        
      }).catch((error) => {
          // An error happened.
          alert(error.message)
      })
          ;
    }
  return (
    <SafeAreaView  style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
   <ScrollView  style={{marginTop: 100}}>
   <Text>Profile </Text>
<View>
<Pressable  style={styles.taskPost} onPress={()=>{
navigation.navigate('PostTask')
}} >
            <Text style={{color : 'black',fontWeight: 'bold', fontSize: 18}}>
        Post Your Task
     </Text>
      </Pressable>
</View>

      <TouchableOpacity   onPress={handleLogout} style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign Out
            </Text>
      </TouchableOpacity>
   </ScrollView>

    </SafeAreaView>
    
  )
}

export default Profile

const styles = StyleSheet.create({
  taskPost:{
    backgroundColor: '#e5dcd6',
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    

  }
})
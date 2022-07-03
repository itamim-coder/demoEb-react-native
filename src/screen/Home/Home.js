import { SafeAreaView, SafeAreaViewBase,Image, StyleSheet, Text, TextInput, View, Pressable, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


const Home = ({navigation}) => {
  
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
    <SafeAreaView style={styles.header}>
      <View style={styles.headerWrapper}>
       <View>
         <Text style={{color: 'white'}}>Hi There!</Text>
         <Text style={{color: 'white'}}>Hi There!</Text>
       </View>
       <View  >
         <Text  style={{color: 'white'}}>Image</Text>
       </View>
      </View>
    </SafeAreaView>
    <View style={styles.search}>
      <View style={styles.searchWrapper}>
        <Icon name="search" size={20} style={styles.searchIcon}/>
        <TextInput placeholder='search' style={styles.searchInput}/>
      </View>
    </View>
    <View>
      <Image style={styles.banner}  source={require('../../../assets/banner.png')}/>     
    </View>

    <View>
      <Text>Recent Errands</Text>
      <View style={[styles.recent, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
      <Image source={require('../../../assets/appliance.png')}/>
      <Image source={require('../../../assets/appliance.png')}/>
      <Image source={require('../../../assets/appliance.png')}/>
      <Image source={require('../../../assets/appliance.png')}/>
      </View>
      
    
    </View>
    <View>
      <Pressable onPress={()=>{
        navigation.navigate("AllJobs")
      }
      
      }>
      <View style={styles.jobs}>
          <Image style={styles.jobsimg} source={require('../../../assets/images/undraw_Task_re_wi3v.png')}
          // resizeMode='contain'
          />
          <Text style={{marginTop: -35, fontWeight: 'bold'}}> ALL JOBS</Text>
        </View>
      </Pressable>
    </View>
    </ScrollView>

  </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fffa',
    // backgroundColor: '#e5dcd6',
   
  },
  header: {
    backgroundColor: '#28388f',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius:40,
    paddingTop: 40,
  },
  headerWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom:50,
  },
  
  search:{
    marginHorizontal: 20,
    fontFamily: 'Monserrat-regular',
    fontSize: 16,
    padding: 15,
    marginTop: -35,
    backgroundColor: '#f8fffa',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset:{
      height: 3,
      width: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 3.5,
    elevation: 10,

  },
  searchWrapper:{
    flexDirection: 'row',
  },
  searchIcon:{
    color: '#b0b0b0',
    marginRight: 10,
    marginTop: 5,
  },
  searchInput:{
    color: '#b4b4b4',
    paddingRight : "80%",    
  },
  jobs:{
    backgroundColor: '#a5a5a5',
    height: 200,
    width: 200,
    borderRadius: 25,
    margin: 25, 

  },
  jobsimg:{    
    height: 200,
    width: 200,
    borderRadius: 25,
    borderWidth: 0.3,
    borderColor: '#a5a5a5',
   },
   banner:{
   marginLeft: 20,
   },
   recent:{
     marginLeft: 15,
   }
})
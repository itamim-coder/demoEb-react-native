import { Button, FlatList, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const navigation = useNavigation()
const renderJobs = ({item}) =>{
  
  return(
    
<Pressable onPress={()=>{
  navigation.navigate("Details", {job: item})
}} style={styles.item}>
  
<SafeAreaView style={styles.single}>
<Text style={styles.text}>Task Name: {item.taskName}</Text>
<Text style={styles.text}>Task Type: {item.category}</Text>
</SafeAreaView>
{/* <AntDesign name="rightcircleo" size={20} color="black" /> */}
<View>

</View>
</Pressable>
  )
}

  useEffect(()=>{
    fetch('https://fast-shelf-30203.herokuapp.com/jobs')
    .then(res=>res.json())
    .then(data => setAllJobs(data))
  },[])
  return (
  
   
<ScrollView>
<View style={styles.header}>
      <View style={styles.headerWrapper}>
       <View>
      <Text style={styles.headerJob}>ALL JOBS</Text>
       
       </View>
      </View>
    </View>
    <View style={styles.search}>
      <View style={styles.searchWrapper}>
        <Icon name="search" size={20} style={styles.searchIcon}/>
        <TextInput placeholder='search' style={styles.searchInput}/>
      </View>
    </View>
    
     
          <FlatList
        contentContainerStyle={styles.list} 
        data={allJobs}
        renderItem={renderJobs}
        keyExtractor={(item) => item._id}
        >

        </FlatList>
     
     
</ScrollView>

    
 

  )
}

export default AllJobs

const styles = StyleSheet.create({
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
  headerJob:{
 color: 'white',
fontWeight: "bold",
 fontSize: 25,
  },
  item:{  
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#a5a5a5',
    padding: 15,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#28388f',
    margin: 15,
   },
  single:{
   
    
  },
  text:{
    color : 'black',
    fontWeight: 'bold',
    fontSize: 15,
  
  },
  list:{
    padding: 20,
   

  }
})
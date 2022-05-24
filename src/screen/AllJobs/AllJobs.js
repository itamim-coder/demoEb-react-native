import { Button, FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react'



const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);


  
  useEffect(()=>{
    fetch('http://localhost:8000/jobs')
    .then(res=>res.json())
    .then(data => setAllJobs(data))
  })
  return (
  <ScrollView>
    <SafeAreaView>
      <View>
        <FlatList>

        </FlatList>
      </View>

    </SafeAreaView>
  </ScrollView>

  )
}

export default AllJobs

const styles = StyleSheet.create({})
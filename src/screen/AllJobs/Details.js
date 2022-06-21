import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Details = ({route}) => {
  const job = route.params.job;
  console.log(job)
  return (
    <>
    <SafeAreaView style={styles.header}>
    <View style={styles.headerWrapper}>
     <View>
    <Text style={styles.jobdetailsText}>JOB DETAILS</Text>
     
     </View>
    </View>
  </SafeAreaView>
  <SafeAreaView>
    <View style={styles.jobCard}>
      <Text style={styles.textHeader}>Task Name : </Text>
      <Text style={styles.text}>{job.taskName}</Text>
      <Text style={styles.textHeader}>This Job Is Posted By</Text>
      <Text style={styles.text}>{job.email}</Text>
      <Text style={styles.textHeader}>Category</Text>
      <Text style={styles.text}>{job.category}</Text>
      <View style={styles.taskDetails}>
        <Text style={styles.textHeader}>Task Details</Text>
        <Text style={styles.text}>{job.taskDetails} </Text>
      </View>
      
    </View>
  </SafeAreaView>
  </>
  )
}

export default Details

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
    jobdetailsText:{
    color: 'white',
    fontWeight: "bold",
    fontSize: 25,    
     },
     jobCard:{
       margin: 20,
     },
     taskDetails:{
      marginTop: 30,
     },
     textHeader:{
      fontSize: 20,
      marginTop : 20,
      fontWeight: 'bold'
     },
     text:{
      marginTop : 8,
      
     },
})
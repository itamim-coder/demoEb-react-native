import { Image, StatusBar, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';


 
const data = [
  {
    title: 'Get Job With ErrandBuddy',
    text: 'Your Buddy For Everything',
    image: require('../../../assets/images/undraw_career_progress_ivdb.png'),
    // bg: '#59b2ab',
  },
  {
    title: 'Get Job  ErrandBuddy',
    text: 'Your Buddy For Everything',
    image: require('../../../assets/images/undraw_Job_hunt_re_q203.png'),
    // bg: '#febe29',
  },
  {
    title: 'Get  With ErrandBuddy',
    text: 'Your Buddy For Everything',
    image: require('../../../assets/images/undraw_job_offers_kw5d.png'),
    // bg: '#22bcb5',
  },
];

const OnBoard = (props) => {
  const  renderItem = ({item}) => {
    return (
       <View style={styles.slide }>
       <Image source={item.image} style={styles.image}></Image>
       <View>
         <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.text}>{item.text}</Text>
       </View>
       </View>
     

    )
  } 
 
  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return(
      <View style={styles.rightText}>
      <Text style={styles.doneText}> Done </Text>
      </View>
    );
   };
   const renderNextButton = () => {
     return(
       <View style={styles.rightText}>
       <Text style={styles.doneText}> Next </Text>
       </View>
     );
   
   }
   const renderPrevButton = () => {
     return(
       <View style={styles.leftText}>
       <Text style={styles.prevText}> Prev </Text>
       </View>
     );
   }

   const handleDone = () => {
    props.handleDone();
  }


  return (
    <View style={{flex: 1}}>
    <StatusBar translucent backgroundColor="transparent" />
    <AppIntroSlider
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderPrevButton={renderPrevButton}
      showPrevButton
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      data={data}
      onDone={handleDone}
    />
</View>
  )
}

export default OnBoard;
const styles = StyleSheet.create({

  slide:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  image: {
   width:'100%',
   height: '30%',
   marginVertical: 50,
  },
  title:{
    fontSize: 34,
    color: '#78938a',
    // color: '#ff8844',
    textAlign: 'center', 
  },
  text:{
    fontSize: 20,
    color: '#000000',
    textAlign: 'center', 
    marginTop: 50,
  
  },
  leftText:{
    height: 40,
    width: 70,
    alignItems: 'center',  
    justifyContent: 'center',
    // backgroundColor: '#b269ff',
    backgroundColor: '#333c83',

    borderRadius: 20,
  },
  prevText: {
    color: '#fffaf0',
    // fontSize: 14,
    fontWeight: "bold",
  
  } ,
  rightText: {
    height: 40,
    width: 70,
    alignItems: 'center',  
    justifyContent: 'center',
    backgroundColor: '#333c83',
    borderRadius: 20,
  } ,
  doneText: {
    color: '#fffaf0',
    // fontSize: 14,
    fontWeight: "bold",
  } ,
  dotStyle:{
  backgroundColor: '#95D1CC',
  },
  activeDotStyle:{
  backgroundColor: '#22577E',
  },
  
  });

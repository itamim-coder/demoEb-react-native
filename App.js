import { View, Text } from 'react-native'
import React from 'react'
import OnBoard from './src/screen/OnBoard/OnBoard'
import OnBoardControl from './src/screen/OnBoard/OnBoardControl'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Authentication/Login/Login';
import Signup from './src/screen/Authentication/Login/Signup';
import AuthProvider from './src/screen/Authentication/context/AuthProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screen/Home/Home';
import Profile from './src/screen/Profile/Profile';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AllJobs from './src/screen/AllJobs/AllJobs';
import PostTask from './src/screen/PostTask/PostTask';
import Details from './src/screen/AllJobs/Details';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return(
    <Tab.Navigator 
    // tabBarOptions={{
    //   // style: styles.tabBar,
    //   // activeTintColor: colors.orange,
    //   // inactiveTintColor: colors.gray,
    //   showLabel: false,
     
      
      
    // }}
    screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen   name="Home" component={Home} options={{        
      tabBarIcon: ({color})=> <Entypo name="home" size={32} color={color}/>
      }}/>
      {/* <Tab.Screen name="Liked" component={Liked} options={{
      tabBarIcon: ({color}) => <Entypo name="heart" size={32} color={color}/>
      }}/> */}
      <Tab.Screen name="Profile" component={Profile} options={{
      tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={32} color={color}/>
      }}/>
    </Tab.Navigator>
  )
} 


const App = () => {
  return (
  
      <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="OnBoard" component={OnBoardControl} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="TabNavigator" component={TabNavigator}  />
        <Stack.Screen name="AllJobs" component={AllJobs}  />
        <Stack.Screen name="Details" component={Details}  />
        <Stack.Screen name="PostTask" component={PostTask}  />      
      

      </Stack.Navigator>
  </NavigationContainer>
   
  )
}

export default App
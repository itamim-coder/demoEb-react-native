import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home/Home'
import Profile from './src/screen/Profile/Profile'

export default function App() {
  return (
    <View>
      {/* <Home/> */}
      {/* <Profile/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

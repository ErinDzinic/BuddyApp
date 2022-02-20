import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Welcome" component={FirstPage}/>
        <Stack.Screen name="Location" component={SecondPage}/>
        <Stack.Screen name="Login" component={ThirdPage}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    display:'flex',
    backgroundColor: 'rgb(255,95,116)',
    height: '100%',
    width: '100%',
  },
  
});



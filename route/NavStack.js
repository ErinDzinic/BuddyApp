import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstPage'>
        <Stack.Screen name='Home' component={FirstPage} />
        <Stack.Screen name='SecondPage' component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
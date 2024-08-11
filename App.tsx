import React from 'react'
import MainMenuScreen from './src/screens/MainMenuScreen/MainMenuScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OpeningScreen from './src/screens/OpeningScreen/OpeningScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MenuScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='MenuScreen' component={MainMenuScreen} />
        <Stack.Screen name='OpeningScreen' component={OpeningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
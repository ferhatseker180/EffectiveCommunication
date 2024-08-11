import { View, Text } from 'react-native'
import React from 'react'

const OpeningScreen = ({route, navigation} : any) => {
    const {menuItem} = route.params;
  return (
    <View>
      <Text>Opening Screen: {menuItem} </Text>
    </View>
  )
}

export default OpeningScreen
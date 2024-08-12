import { View, Text } from 'react-native'
import React from 'react'
import ContentMenuCard from './ContentMenuComponents/ContentMenuCard'

const ContentMenuScreen = ({route, navigation} : any) => {
    const {contentMenuItem} = route.params;
  return (
    <View>
      <ContentMenuCard  /> 
    </View>
  )
}

export default ContentMenuScreen
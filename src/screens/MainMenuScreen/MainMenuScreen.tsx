import { SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import MainMenuCard from './MainMenuComponents/MainMenuCard'
import menuItems from '../../data/MenuItemData/MenuItem.json'
import { getImageForItem,getBackgroundColorForItem,getTextColorForItem } from '../../utils/MainMenuUtils/MainMenuMapping'

const MainMenuScreen = ({navigation} : any) => {
  const renderMenuItem = ({item} : any) => (
    
    <MainMenuCard
      name={item.name}
      imageSource={getImageForItem(item.name)}
      backgroundColor={getBackgroundColorForItem(item.name)}
      titleColor={getTextColorForItem(item.name)} // titleColor prop'u ekleniyor
      onPress={() => {
        console.log("Navigating to Content Menu Screen with:", item.name);
        navigation.navigate('ContentMenuScreen', { contentMenuItem: item.name });
      }}
    />
  );
  return (
    <SafeAreaView>
     <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    
    </SafeAreaView>
  )
}



export default MainMenuScreen
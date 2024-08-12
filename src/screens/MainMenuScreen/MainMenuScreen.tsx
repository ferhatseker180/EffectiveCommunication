import { SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import MainMenuCard from './MainMenuComponents/MainMenuCard'
import menuItems from '../../data/MenuItem.json'

const getImageForItem = (name : string) => {
  switch (name) {
    case 'Beden Dili':
      return require('../../data/images/body-language.png');
    case 'Kadın Erkek İlişkisi':
      return require('../../data/images/couple.png');
    case 'Yalan Yakalama':
      return require('../../data/images/mask.png');
    case 'İkna Teknikleri':
      return require('../../data/images/persuasive.png');
    case 'Manipülasyon':
      return require('../../data/images/manipulation.png');
    case 'Stres Yönetimi':
      return require('../../data/images/stress.png');
    case 'Anksiyete':
      return require('../../data/images/anxiety.png');
    case 'Özgüven':
      return require('../../data/images/self-confidence.png');
    case 'Uyku Sağlığı':
      return require('../../data/images/sleep-deprivation.png');
    case 'Öfke Yönetimi':
      return require('../../data/images/fury.png');
      default:
        console.warn(`Image for ${name} not found.`);
        return require('../../data/images/no-camera.png');
  }
};

const getBackgroundColorForItem = (name: string) => {
  switch (name) {
    case 'Beden Dili':
      return '#fffaf0';
    case 'Kadın Erkek İlişkisi':
      return '#ffc0cb';
    case 'Yalan Yakalama':
      return '#d0ebff';
    case 'İkna Teknikleri':
      return '#00bfff';
    case 'Manipülasyon':
      return '#fff5ba';
    case 'Stres Yönetimi':
      return '#40e0d0';
    case 'Anksiyete':
      return '#c0c0c0';
    case 'Özgüven':
      return '#ffd700';
    case 'Uyku Sağlığı':
      return '#000080';
    case 'Öfke Yönetimi':
      return '#ffa500';
    default:
      return '#fff8dc';
  }
};

const getTextColorForItem = (name: string) => {
  switch (name) {
    case 'Beden Dili':
      return "#000";
    case 'Kadın Erkek İlişkisi':
      return '#000';
    case 'Yalan Yakalama':
      return '#000';
    case 'İkna Teknikleri':
      return '#000';
    case 'Manipülasyon':
      return '#000';
    case 'Stres Yönetimi':
      return '#000';
    case 'Anksiyete':
      return '#000';
    case 'Özgüven':
      return '#000';
    case 'Uyku Sağlığı':
      return '#fff';
    case 'Öfke Yönetimi':
      return '#000';
    default:
      return '#000';
  }
};

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
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    
    </SafeAreaView>
  )
}



export default MainMenuScreen
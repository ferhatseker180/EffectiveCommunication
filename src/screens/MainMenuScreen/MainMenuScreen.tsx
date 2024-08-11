import { SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import MainMenuCard from './MainMenuComponents/MainMenuCard'
import menuItems from '../../data/MenuItem.json'

const getImageForItem = (name : string) => {
  switch (name) {
    case 'Beden Dili':
      return require('../../data/images/body-language.png');
    case 'Kadın Erkek İlişkisi':
      return require('../../data/images/woman-man.png');
    case 'Yalan Yakalama':
      return require('../../data/images/lying.png');
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
        return require('../../data/images/anxiety.png');
  }
};

const getBackgroundColorForItem = (name: string) => {
  switch (name) {
    case 'Beden Dili':
      return '#f7e7ce';
    case 'Kadın Erkek İlişkisi':
      return '#f8d7da';
    case 'Yalan Yakalama':
      return '#d0ebff';
    case 'İkna Teknikleri':
      return '#ffcccb';
    case 'Manipülasyon':
      return '#fff5ba';
    case 'Stres Yönetimi':
      return '#d9f7be';
    case 'Anksiyete':
      return '#ffdab9';
    case 'Özgüven':
      return '#f0e6f6';
    case 'Uyku Sağlığı':
      return '#f4f4f9';
    case 'Öfke Yönetimi':
      return '#fbe9e7';
    default:
      return '#fff8dc';
  }
};
const MainMenuScreen = ({navigation} : any) => {
  const renderMenuItem = ({item} : any) => (
    <MainMenuCard
      name={item.name}
      imageSource={getImageForItem(item.name)}
      backgroundColor={getBackgroundColorForItem(item.name)}
      onPress={() => {
        console.log("Navigating to OpeningScreen with:", item.name);
        navigation.navigate('OpeningScreen', { menuItem: item.name });
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
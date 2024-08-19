import { View, FlatList } from 'react-native';
import React from 'react';
import ContentMenuCard from './ContentMenuComponents/ContentMenuCard';
import { contentMenuMap } from '../../utils/ContentMenuUtils/ContentMenuMapping';

const ContentMenuScreen = ({ route, navigation }: any) => {
  const { contentMenuItem } = route.params; // Gelen menü ismini al

  // Uygun JSON verisini yükle
  const menuContent = contentMenuMap[contentMenuItem];

  if (!menuContent) {
    console.error(`Menu content for "${contentMenuItem}" not found.`);
    return null;
  }

  // JSON verisindeki content kısmı alınır
  const data = menuContent.data || [];
  // Varsayılan görsel atanır
  const defaultImage = menuContent.defaultImage || require('../../images/ContentMenuImages/BodyLanguageImages/anger.png');
  // İçerik türüne göre doğru imageMap'i alıyoruz
  const imageMap = menuContent.imageMap || {};

  // Debug: imageMap içeriğini kontrol edin
  console.log("ImageMap:", imageMap);

  const renderItem = ({ item }: any) => {
    // Debug: item.imageSource ve imageMap içeriğini kontrol edin
    console.log("Item imageSource:", item.imageSource);
    console.log("ImageMap inside renderItem:", imageMap);

    const imageSource = imageMap[item.imageSource] || defaultImage;

    return (
      <ContentMenuCard
        title={item.title}
        contentImageSource={imageSource} // Lokal image yolu
        onPress={() => console.log('Press Button')}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ContentMenuScreen;

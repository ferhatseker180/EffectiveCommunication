import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ContentMenuCard from './ContentMenuComponents/ContentMenuCard'
import data from '../../data/ContentMenuData/BodyLanguage.json';

// Dinamik olarak JSON verisini yükleyin
const getDataForItem = (menuName: string) => {
    switch (menuName) {
        case 'Beden Dili':
            return require('../../data/ContentMenuData/BodyLanguage.json');
        case 'Kadın Erkek İlişkisi':
            return require('../../data/ContentMenuData/Relationship.json');
        // Diğer menü başlıkları için de benzer şekilde case ekleyebilirsiniz
        default:
            console.warn(`Data for ${menuName} not found.`);
            return [];
    }
};

// Dinamik olmayan bir nesne ile image path'lerini eşleştirin
const imageMap: { [key: string]: any } = {
    "facial-expressions.jpg": require('../../images/ContentMenuImages/facial-expressions.jpg'),
    "love.jpg": require('../../images/ContentMenuImages/love.jpg'),
    "doubt.jpg": require('../../images/ContentMenuImages/doubt.jpg'),
    "self-confidence.jpg" : require('../../images/ContentMenuImages/self-confidence.jpg')
  };

const ContentMenuScreen = ({route, navigation} : any) => {
    const { contentMenuItem } = route.params; // Gelen menü ismini al
    const data = getDataForItem(contentMenuItem); // Uygun JSON verisini yükle

    const renderItem = ({ item }: any) => {
        const imageSource = imageMap[item.imageSource] || require('../../images/ContentMenuImages/anger.png');
        
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
}


export default ContentMenuScreen
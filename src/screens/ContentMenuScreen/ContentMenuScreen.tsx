import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ContentMenuCard from './ContentMenuComponents/ContentMenuCard'
import data from '../../data/BodyLanguage.json';

// Dinamik olmayan bir nesne ile image path'lerini eşleştirin
const imageMap: { [key: string]: any } = {
    "anxiety.png": require('../../data/images/anxiety.png'),
    "couple.png": require('../../data/images/couple.png'),
    "stress.png": require('../../data/images/stress.png'),
  };

const ContentMenuScreen = ({route, navigation} : any) => {
    const renderItem = ({ item }: any) => {
        const imageSource = imageMap[item.imageSource] || require('../../data/images/no-camera.png');
        
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
import { View, Text, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import styles from './MainMenuStyle';

interface MainMenuCardProps {
  name: string;
  imageSource: any;
  backgroundColor: string; // Arka plan rengi
  titleColor: string; // Text rengi
  onPress: () => void;
}

const MainMenuCard = ({name, imageSource, backgroundColor, titleColor, onPress}: MainMenuCardProps) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <View style={[styles.card, {backgroundColor }]}>
      
      <TouchableOpacity onPress={onPress}> 
      <Image
        style={styles.image}
        source={imageSource || require('../../../data/images/anxiety.png')} // Görsel dosya yolu
        onError={handleImageError}
      />
      </TouchableOpacity>
      
      <Text style={[styles.text, { color: titleColor }]}>{name}</Text> 
      </View>
  )
}

export default MainMenuCard

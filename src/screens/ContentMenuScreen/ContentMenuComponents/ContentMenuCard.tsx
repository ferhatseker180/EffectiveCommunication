import { View } from 'react-native';
import React, { useState } from 'react';
import styles from './ContentMenuCardStyle';
import { Avatar, Button, Card, Text } from 'react-native-paper';

interface ContentMenuCardProps {
  title: string;
  contentImageSource: any;
  onPress: () => void;
}

const ContentMenuCard = ({title, contentImageSource, onPress}: ContentMenuCardProps) => {
  const LeftContent = (props : any) => <Avatar.Icon {...props} icon="folder" />
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  const maxLength = 100; // Gösterilecek maksimum karakter sayısı
  const truncatedTitle = title.length > maxLength ? title.substring(0, maxLength) + '...' : title;

  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
      <View style={styles.imageContainer}>
        <Card.Cover 
          style={styles.content_image} 
          source={contentImageSource} 
          onError={handleImageError}
        />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{truncatedTitle} </Text>
        </View>
      </View>
      <Card.Actions>
        <Button onPress={onPress}>Oku</Button>
      </Card.Actions>
    </Card>
  );
}

export default ContentMenuCard;

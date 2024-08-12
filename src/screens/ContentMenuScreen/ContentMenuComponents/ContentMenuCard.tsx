import { View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
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

  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Card.Cover 
          style={styles.content_image} 
          source={contentImageSource} 
          onError={handleImageError}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title} </Text>
        </View>
      </View>
      <Card.Actions>
        <Button onPress={onPress}>Oku</Button>
      </Card.Actions>
    </Card>
  );
}

export default ContentMenuCard;

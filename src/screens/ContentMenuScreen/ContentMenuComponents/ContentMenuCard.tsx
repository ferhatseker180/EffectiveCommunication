import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './ContentMenuCardStyle';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const ContentMenuCard = () => {
  const LeftContent = (props : any) => <Avatar.Icon {...props} icon="folder" />

  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Card.Cover 
          style={styles.content_image} 
          source={{ uri: 'https://picsum.photos/700' }} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>İhtişamlı Gösteren 15 Beden Dili Hareketini Öğrenmek İster Misin? İmajını Güçlendirme Zamanı </Text>
        </View>
      </View>
      <Card.Actions>
        <Button>Oku</Button>
      </Card.Actions>
    </Card>
  );
}

export default ContentMenuCard;

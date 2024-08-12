import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width * 0.3; // Ekranın %30'u genişliğinde
const imageHeight = imageWidth * 0.80; // Görselin oranına göre yükseklik
const fontSize = width * 0.045; // Dinamik font boyutu

export default StyleSheet.create({
 
  card: {
    margin: 8,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  content_image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
    marginRight: 12, // Görsel ile metin arasında boşluk
    alignSelf: 'center', // Görseli yatayda ortalar
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', // Metni dikeyde ortalar
  },
  cardTitle: {
    fontSize: fontSize,
    fontFamily: 'Gupter-Bold',
    textAlign: 'left'
  },

});

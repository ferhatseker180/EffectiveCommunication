import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width * 0.4; // Ekranın %30'u genişliğinde
const imageHeight = imageWidth * 1.2; // Görselin oranına göre yükseklik
const fontSize = width * 0.06; // Dinamik font boyutu

export default StyleSheet.create({
 
  card: {
    margin: 4,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
   // Yeni imageContainer stili
   imageContainer: {
    width: imageWidth,
    height: imageHeight,
    justifyContent: 'center', // Görseli dikeyde ortalamak için
    alignItems: 'center', // Görseli yatayda ortalamak için
    marginRight: 12, // Görsel ile metin arasında boşluk
    marginTop: 30, // Görsel
  },
  content_image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'contain',
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

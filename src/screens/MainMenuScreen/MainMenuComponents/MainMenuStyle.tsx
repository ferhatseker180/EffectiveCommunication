import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');
const cardWidth = width / 2.2; // Ekranın yarısından biraz daha dar bir genişlik

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff8dc',
    borderRadius: 50, // Köşeleri yuvarlatma
    padding: 2, // İç boşluk
    width: cardWidth, // Dinamik genişlik
    height: cardWidth * 1.0, // Dinamik yükseklik (genişliğin 1.2 katı)
    alignItems: 'center', // İçeriği yatayda ortalar
    justifyContent: 'center', // İçeriği dikeyde ortalar
    margin: 10, // Card'lar arasında boşluk
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: cardWidth * 0.8, // Görsel boyutu card genişliğine göre oranlanmış
    height: cardWidth * 0.6, // Görsel yüksekliği card genişliğine göre oranlanmış
    resizeMode: 'contain', // Görsel boyutu yeniden boyutlandırma
    borderRadius: cardWidth * 0.3, // Görseli yuvarlatma (tam yuvarlak)
    marginBottom: 10, // Görsel ile metin arasındaki boşluk
  },
  text: {
    fontSize: cardWidth * 0.1, // Dinamik font boyutu
    color: '#000000',
    fontFamily: 'Oswald-Bold',
  },

  header: {
    fontSize: 20, // Başlık font boyutu
    fontWeight: 'bold',
    color: '#000',
    borderBottomColor: '#ddd', // Alt çizgi rengi
    textAlign: 'center', // Ortalanmış metin
    marginTop: 10,
    marginBottom: 10, // Başlık ve liste arasında boşluk
  },

});

import menuItemData from '../../data/MenuItemData/MenuItem.json'

// Menü öğelerine karşılık gelen görseller, arka plan renkleri ve metin renkleri için bir nesne oluşturuyoruz
const menuItemMap: { [key: string]: { image: any, backgroundColor: string, textColor: string } } = {
    'Beden Dili': {
      image: require('../../images/MainMenuIcon/body-language.png'),
      backgroundColor: '#fffaf0',
      textColor: '#000'
    },
    'Kadın Erkek İlişkisi': {
      image: require('../../images/MainMenuIcon/couple.png'),
      backgroundColor: '#ffc0cb',
      textColor: '#000'
    },
    'Yalan Yakalama': {
      image: require('../../images/MainMenuIcon/mask.png'),
      backgroundColor: '#d0ebff',
      textColor: '#000'
    },
    'İkna Teknikleri': {
      image: require('../../images/MainMenuIcon/persuasive.png'),
      backgroundColor: '#00bfff',
      textColor: '#000'
    },
    'Manipülasyon': {
      image: require('../../images/MainMenuIcon/manipulation.png'),
      backgroundColor: '#fff5ba',
      textColor: '#000'
    },
    'Stres Yönetimi': {
      image: require('../../images/MainMenuIcon/stress.png'),
      backgroundColor: '#40e0d0',
      textColor: '#000'
    },
    'Anksiyete': {
      image: require('../../images/MainMenuIcon/anxiety.png'),
      backgroundColor: '#c0c0c0',
      textColor: '#000'
    },
    'Özgüven': {
      image: require('../../images/MainMenuIcon/self-confidence.png'),
      backgroundColor: '#ffd700',
      textColor: '#000'
    },
    'Uyku Sağlığı': {
      image: require('../../images/MainMenuIcon/sleep-deprivation.png'),
      backgroundColor: '#000080',
      textColor: '#fff'
    },
    'Öfke Yönetimi': {
      image: require('../../images/MainMenuIcon/fury.png'),
      backgroundColor: '#ffa500',
      textColor: '#000'
    }
  };
  
  export const getImageForItem = (name: string) => {
    return menuItemMap[name]?.image || require('../../images/MainMenuIcon/no-camera.png');
  };
  
  export const getBackgroundColorForItem = (name: string) => {
    return menuItemMap[name]?.backgroundColor || '#fff8dc';
  };
  
  export const getTextColorForItem = (name: string) => {
    return menuItemMap[name]?.textColor || '#000';
  };
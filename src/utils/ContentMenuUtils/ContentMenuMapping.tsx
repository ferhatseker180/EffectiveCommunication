import BodyLanguage from '../../data/ContentMenuData/BodyLanguage.json';
import Relationship from '../../data/ContentMenuData/Relationship.json';
import CatchLie from '../../data/ContentMenuData/CatchLie.json';

// Body Language images
export const bodyLanguageImageMap: { [key: string]: any } = {
  "convince.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/convince.jpg'),
  "exposed-lie.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/exposed-lie.jpg'),
  "signal-of-love.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/signal-of-love.jpg'),
  "showing-confidence.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/showing-confidence.jpg'),
  "warm-smile.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/warm-smile.jpg'),
  "doubt-body.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/doubt-body.jpg'),
  "hand-gestures.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/hand-gestures.jpg'),
  "fury-and-sad.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/fury-and-sad.jpg'),
  "social-success.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/social-success.jpg'),
  "face-muscle-move.jpg": require('../../images/ContentMenuImages/BodyLanguageImages/face-muscle-move.jpg')
};

// Relationship images
export const relationshipImageMap: { [key: string]: any } = {
  "love-bombing.jpg": require('../../images/ContentMenuImages/Relationship/love-bombing.jpg'),
  "signal-of-love.jpg": require('../../images/ContentMenuImages/Relationship/signal-of-love.jpg'),
  "understand-of-love.jpg": require('../../images/ContentMenuImages/Relationship/understand-of-love.jpg'),
  "relationship-problem.jpg": require('../../images/ContentMenuImages/Relationship/relationship-problem.jpg'),
  "cheating.jpg": require('../../images/ContentMenuImages/Relationship/cheating.jpg'),
  "love-body-move.jp": require('../../images/ContentMenuImages/Relationship/love-body-move.jpg'),
  "partner-lie.jpg": require('../../images/ContentMenuImages/Relationship/partner-lie.jpg'),
  "long-relationship.jpg": require('../../images/ContentMenuImages/Relationship/long-relationship.jpg'),
  "personel-area.jpg": require('../../images/ContentMenuImages/Relationship/personel-area.jpg'),
  "cheating-signal.jpg": require('../../images/ContentMenuImages/Relationship/cheating-signal.jpg'),
  "crisis-relationship.jpg": require('../../images/ContentMenuImages/Relationship/crisis-relationship.jpg')
  // Diğer görselleri burada tanımlayabilirsiniz
};

// Catch Lie images
export const catchLieImageMap: { [key: string]: any } = {
  "effect-of-lie.jpg": require('../../images/ContentMenuImages/CatchLieImages/effect-of-lie.jpg'),
  "eye-contact.jpg": require('../../images/ContentMenuImages/CatchLieImages/eye-contact.jpg'),
  "change-topic.jpg": require('../../images/ContentMenuImages/CatchLieImages/change-topic.jpg'),
  "voice-tone.jpg": require('../../images/ContentMenuImages/CatchLieImages/voice-tone.jpg'),
  "signal-of-pressure.jpg": require('../../images/ContentMenuImages/CatchLieImages/signal-of-pressure.jpg'),
  "ask-questions.jpg": require('../../images/ContentMenuImages/CatchLieImages/ask-questions.jpg'),
  "true-perspective.jpg": require('../../images/ContentMenuImages/CatchLieImages/true-perspective.jpg'),
};

// Menü öğelerine karşılık gelen JSON verileri, görseller ve varsayılan görseller için bir nesne oluşturuyoruz
export const contentMenuMap: { 
  [key: string]: { 
    data: any, 
    defaultImage: any,
    imageMap: { [key: string]: any } // Image map için yer açıyoruz
  } 
} = {
  'Beden Dili': {
    data: BodyLanguage,
    defaultImage: require('../../images/ContentMenuImages/BodyLanguageImages/anger.png'),
    imageMap: bodyLanguageImageMap // Body Language için image map
  },
  'Kadın Erkek İlişkisi': {
    data: Relationship,
    defaultImage: require('../../images/ContentMenuImages/Relationship/signal-of-love.jpg'),
    imageMap: relationshipImageMap // Relationship için image map
  },
  'Yalan Yakalama': {
    data: CatchLie,
    defaultImage: require('../../images/ContentMenuImages/CatchLieImages/signal-of-pressure.jpg'),
    imageMap: catchLieImageMap // Catch Lie için image map
  }
};

//react-native.config.js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/*'],
  dependencies: {
    '@react-native-seoul/kakao-login': {
      // Set null on platform that you want manual installation
      platforms: {
        ios: {},
        android: {},
      },
    },
  },
};

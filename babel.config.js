module.exports = function(api) {
  api.cache(true); // Tăng tốc độ biên dịch

  return {
    presets: ['babel-preset-expo'], // Đây là preset tiêu chuẩn cho Expo/React Native
  };
};
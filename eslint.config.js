// // https://docs.expo.dev/guides/using-eslint/
// const { defineConfig } = require('eslint/config');
// const expoConfig = require('eslint-config-expo/flat');

// module.exports = defineConfig([
//   expoConfig,
//   {
//     ignores: ['dist/*'],
//   },
// ]);


// file: eslint.config.js
module.exports = {
  // Môi trường nơi code của bạn chạy (node và browser)
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // Các quy tắc kế thừa từ các cấu hình tiêu chuẩn
  extends: [
    'eslint:recommended', // Các quy tắc cơ bản
    'plugin:@typescript-eslint/recommended', // Quy tắc cho TypeScript
    'plugin:react/recommended', // Quy tắc cho React
    'plugin:react-hooks/recommended', // Quy tắc cho React Hooks
    'plugin:react/jsx-runtime', // Tùy chọn cho React 17+
  ],
  // Bộ phân tích cú pháp (parser)
  parser: '@typescript-eslint/parser',
  // Tùy chọn parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // Cần thiết nếu bạn muốn ESLint phân tích code dựa trên kiểu dữ liệu
    // project: './tsconfig.json', 
  },
  // Các plugin đã cài đặt
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  // Quy tắc tùy chỉnh (ví dụ: không cho phép dùng console.log trong production)
  rules: {
    // Tắt kiểm tra prop-types vì chúng ta dùng TypeScript
    'react/prop-types': 'off', 
    // Cho phép dùng JSX trong file .js và .tsx
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tự động phát hiện phiên bản React
    },
  },
};
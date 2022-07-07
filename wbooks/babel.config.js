module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@constants': './src/constants',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@hooks': './src/app/hooks',
          '@screens': './src/app/screens',
          '@config': './src/config',
          '@interfaces': './src/interfaces',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};

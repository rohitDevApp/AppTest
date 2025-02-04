module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@ui': './src/ui',
          '@redux': './src/redux',
          '@constants': './src/constants',
          '@utils': './src/utils',
        },
      },
      'react-native-reanimated/plugin',
    ],
  ],
};

//yarn add -D babel-plugin-module-resolver

module.exports = api => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel',
      'babel-plugin-styled-components',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            'react-native-vector-icons': '@expo/vector-icons',
            assets: './assets',
            apollo: './apollo',
            config: './src/config',
            server: './src/server',
            hooks: './src/hooks',
            locales: './src/locales',
            containers: './src/containers',
            components: './src/components',
            screens: './src/screens',
            store: './src/store',
            theme: './src/theme'
          }
        }
      ]
    ]
  }
}

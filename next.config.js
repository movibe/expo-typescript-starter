// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: [
          "react-native", "styled-components", "styled-components/native"
        ],
        webpack: config => ({
          ...config,
          resolve: {
            ...config.resolve,
            extensions: [
              '.web.ts',
              '.web.tsx',
              '.ts',
              '.tsx',
              '.web.js',
              '.web.jsx',
              '.js',
              '.jsx',
              ...config.resolve.extensions
            ],
            alias: {
              ...config.resolve.alias,
              'react-native$': 'react-native-web'
            }
          }
        })
        
      },
    ],
    withFonts,
    withImages,
    [withExpo, { projectRoot: __dirname }],
  ],
  {
    // ...
  }
)

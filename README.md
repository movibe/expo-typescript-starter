# expo-typescript-starter

This is a boilerplate for [expo]() project with [typescript]() integration.

## Tech Stack

- [Expo](https://expo.io/) ([React-Native](https://facebook.github.io/react-native/))
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Storybook](https://storybook.js.org/) ([React-Native for Web](https://github.com/necolas/react-native-web))
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [klank](https://github.com/Naturalclar/klank)

## Getting started

### Clone the repository

```sh
git clone https://github.com/Naturalclar/expo-typescript-starter.git
cd expo-typescript-starter
```

### Install the dependencies

```sh
yarn
```

### Storybook

This project utilizes [Storybook](https://storybook.js.org/) with [react-native-web]() to easily implement component without the need to launch the emulator.

Implementing screen components this way is much easier than implementing them through an emulator, as the loading time is much faster.

You can view the storybook by running

```sh
yarn storybook
```
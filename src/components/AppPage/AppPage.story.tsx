import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AppPage } from './index'
import { withKnobs, text } from '@storybook/addon-knobs'
import { StorybookContainer } from 'hooks'
import { withRedux } from 'hooks'
import { Text } from 'react-native-paper'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AppPage', () => (
    <StorybookContainer>
      <AppPage title={text('title', 'Hello world')}>
        <Text>{text('text', 'Hello world')}</Text>
      </AppPage>
    </StorybookContainer>
  ))

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AppPage } from './index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { StorybookContainer, withRedux } from 'hocs'
import { Text } from 'react-native-paper'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AppPage', () => (
    <StorybookContainer padding={boolean('padding', false)}>
      <AppPage title={text('title', 'Hello world')}>
        <Text>{text('text', 'Hello world')}</Text>
      </AppPage>
    </StorybookContainer>
  ))

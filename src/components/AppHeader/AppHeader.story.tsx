import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AppHeader } from './index'
import { withKnobs, text } from '@storybook/addon-knobs'
import { StorybookContainer } from 'hooks'
import { withRedux } from 'hooks'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AppHeader', () => (
    <StorybookContainer>
      <AppHeader title={text('title', 'Title')} />
    </StorybookContainer>
  ))

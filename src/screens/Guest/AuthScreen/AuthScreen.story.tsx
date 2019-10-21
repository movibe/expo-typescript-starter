import * as React from 'react'
import { storiesOf } from '@storybook/react'
import AuthScreen from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { StorybookContainer } from 'hooks'
import { withRedux } from 'hooks'

storiesOf('Screen', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('Home', () => (
    <StorybookContainer>
      <AuthScreen />
    </StorybookContainer>
  ))

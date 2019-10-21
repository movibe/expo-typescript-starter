import * as React from 'react'
import { storiesOf } from '@storybook/react'
import TermScreen from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { withRedux } from 'hooks'

storiesOf('Screens', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('TermScreen', () => (
    <TermScreen />
  ))

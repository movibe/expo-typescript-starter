import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Loading } from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { withRedux } from 'hooks'
import { StorybookContainer } from 'hooks'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('Loading', () => (
    <StorybookContainer>
      <Loading />
    </StorybookContainer>
  ))

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Loading } from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { StorybookContainer, withRedux } from 'hocs'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('Loading', () => (
    <StorybookContainer>
      <Loading />
    </StorybookContainer>
  ))

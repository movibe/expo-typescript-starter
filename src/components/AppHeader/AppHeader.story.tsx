import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AppHeader } from './index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { StorybookHoc, withRedux } from 'hocs'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AppHeader', () => (
    <StorybookHoc padding={boolean('padding', false)}>
      <AppHeader title={text('title', 'Title')} />
    </StorybookHoc>
  ))

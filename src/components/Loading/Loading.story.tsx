import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Loading } from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { StorybookHoc, withRedux } from 'hocs'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('Loading', () => (
    <StorybookHoc padding={boolean('padding', true)}>
      <Loading />
    </StorybookHoc>
  ))

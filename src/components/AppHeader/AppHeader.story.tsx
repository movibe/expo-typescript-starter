import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AppHeader } from './index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { StorybookContainer, withRedux } from 'hocs'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AppHeader', () => (
    <StorybookContainer padding={boolean('padding', false)}>
      <AppHeader title={text('title', 'Title')} />
    </StorybookContainer>
  ))

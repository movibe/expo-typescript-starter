import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AppConfig } from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { StorybookContainer, withRedux } from 'hocs'

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AppConfig', () => (
    <StorybookContainer padding={boolean('padding', true)}>
      <AppConfig />
    </StorybookContainer>
  ))

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ForgotForm } from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { StorybookContainer, withRedux } from 'hocs'

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('ForgotForm', () => (
    <StorybookContainer padding={boolean('padding', true)}>
      <ForgotForm
        loading={boolean('loading', false)}
        onSubmit={action('onSubmit')}
      />
    </StorybookContainer>
  ))

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginForm } from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { StorybookHoc, withRedux } from 'hocs'

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('LoginForm', () => (
    <StorybookHoc padding={boolean('padding', true)}>
      <LoginForm
        loading={boolean('loading', false)}
        onFacebook={action('onFacebook')}
        onSubmit={action('onSubmit')}
      />
    </StorybookHoc>
  ))

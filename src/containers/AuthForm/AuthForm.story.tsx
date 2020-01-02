import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthForm } from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { StorybookHoc, withRedux } from 'hocs'

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AuthForm', () => (
    <StorybookHoc padding={boolean('padding', true)}>
      <AuthForm
        loading={boolean('loading', false)}
        onFacebook={action('onFacebook')}
        onSubmit={action('onSubmit')}
      />
    </StorybookHoc>
  ))
